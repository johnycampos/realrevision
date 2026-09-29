<script setup>
import { ref, onMounted } from 'vue'
import estoque from '@/server/Estoque'

const logs = ref([])
const isLoading = ref(false)
const filtroEntidade = ref('')
const filtroAcao = ref('')
const totalRetornado = ref(0)

const opcoesEntidade = [
  { title: 'Todos (Itens e Fornecedores)', value: '' },
  { title: 'Itens', value: 'itens' },
  { title: 'Fornecedores', value: 'fornecedores' }
]

const opcoesAcao = [
  { title: 'Todas as ações', value: '' },
  { title: 'Criação de Item', value: 'criar_item' },
  { title: 'Atualização de Item', value: 'atualizar_item' },
  { title: 'Exclusão de Item', value: 'deletar_item' },
  { title: 'Ajuste de Saldo', value: 'ajuste_estoque' },
  { title: 'Vínculo Fornecedor-Item', value: 'vincular_fornecedor_item' },
  { title: 'Desvínculo Fornecedor-Item', value: 'desvincular_fornecedor_item' },
  { title: 'Criação de Fornecedor', value: 'criar_fornecedor' },
  { title: 'Atualização de Fornecedor', value: 'atualizar_fornecedor' },
  { title: 'Exclusão de Fornecedor', value: 'deletar_fornecedor' }
]

const formatarAcaoLabel = acao => {
  const mapa = {
    criar_item: 'Criação de Item',
    atualizar_item: 'Atualização de Item',
    deletar_item: 'Exclusão de Item',
    ajuste_estoque: 'Ajuste de Saldo',
    vincular_fornecedor_item: 'Vínculo de Fornecedor',
    desvincular_fornecedor_item: 'Remoção de Fornecedor',
    criar_fornecedor: 'Criação de Fornecedor',
    atualizar_fornecedor: 'Atualização de Fornecedor',
    deletar_fornecedor: 'Exclusão de Fornecedor'
  }
  
  return mapa[acao] || acao
}

const getAcaoColor = acao => {
  if (acao.startsWith('criar')) return 'success'
  if (acao.startsWith('atualizar') || acao === 'ajuste_estoque') return 'info'
  if (acao.startsWith('deletar') || acao.startsWith('desvincular')) return 'error'
  
  return 'primary'
}

const formatarData = iso => {
  if (!iso) return '—'
  const d = new Date(iso)
  
  return d.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatarDetalhes = detalhes => {
  if (!detalhes) return '—'
  if (typeof detalhes === 'string') {
    try {
      detalhes = JSON.parse(detalhes)
    } catch (e) {
      return detalhes
    }
  }

  const parts = []
  if (detalhes.nome) parts.push(`Nome: ${detalhes.nome}`)
  if (detalhes.codigo) parts.push(`Cód: ${detalhes.codigo}`)
  if (detalhes.operacao) parts.push(`${detalhes.operacao === 'adicionar' ? '+' : '-'}${detalhes.quantidade} un (Novo saldo: ${detalhes.nova_quantidade})`)
  if (detalhes.fornecedor_id) parts.push(`Fornecedor ID: ${detalhes.fornecedor_id}`)
  if (detalhes.valor !== undefined) parts.push(`Valor: R$ ${detalhes.valor}`)

  if (parts.length > 0) return parts.join(' | ')
  
  return JSON.stringify(detalhes)
}

const carregarLogs = async () => {
  isLoading.value = true
  try {
    const params = { limit: 100 }
    if (filtroEntidade.value) {
      params.entidade = filtroEntidade.value
    }
    if (filtroAcao.value) {
      params.acao = filtroAcao.value
    }

    const res = await estoque.listarLogsEstoque(params)
    const logsRecebidos = res.data?.logs || []

    // Se nenhum filtro de entidade específico foi selecionado, mantém apenas eventos de estoque/fornecedores
    if (!filtroEntidade.value) {
      logs.value = logsRecebidos.filter(l => l.entidade === 'itens' || l.entidade === 'fornecedores')
    } else {
      logs.value = logsRecebidos
    }

    totalRetornado.value = logs.value.length
  } catch (err) {
    console.error('Erro ao carregar logs:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  carregarLogs()
})
</script>

<template>
  <div>
    <!-- Barra de Filtros -->
    <VCard class="mb-4">
      <VCardText class="d-flex flex-wrap align-center justify-space-between gap-4">
        <div class="d-flex flex-wrap align-center gap-3 flex-grow-1">
          <div style="min-width: 220px;">
            <VSelect
              v-model="filtroEntidade"
              :items="opcoesEntidade"
              label="Filtrar por Área"
              density="compact"
              variant="outlined"
              hide-details
              @update:model-value="carregarLogs"
            />
          </div>

          <div style="min-width: 220px;">
            <VSelect
              v-model="filtroAcao"
              :items="opcoesAcao"
              label="Filtrar por Ação"
              density="compact"
              variant="outlined"
              hide-details
              @update:model-value="carregarLogs"
            />
          </div>
        </div>

        <VBtn
          variant="outlined"
          color="secondary"
          prepend-icon="mdi-refresh"
          :loading="isLoading"
          @click="carregarLogs"
        >
          Atualizar
        </VBtn>
      </VCardText>
    </VCard>

    <!-- Tabela de Auditoria -->
    <VCard :loading="isLoading">
      <div class="table-responsive">
        <VTable class="text-no-wrap">
          <thead>
            <tr>
              <th class="text-uppercase">
                Data / Hora
              </th>
              <th class="text-uppercase">
                Usuário
              </th>
              <th class="text-uppercase">
                Ação
              </th>
              <th class="text-uppercase">
                Entidade
              </th>
              <th class="text-uppercase">
                Detalhes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="log in logs"
              :key="log.id"
            >
              <td class="text-caption font-weight-medium">
                {{ formatarData(log.created_at) }}
              </td>

              <td class="font-weight-medium">
                <div class="d-flex align-center gap-1">
                  <VIcon
                    icon="mdi-account-outline"
                    size="16"
                    class="text-medium-emphasis"
                  />
                  <span>{{ log.usuario_nome || 'Sistema' }}</span>
                </div>
              </td>

              <td>
                <VChip
                  size="small"
                  :color="getAcaoColor(log.acao)"
                  variant="tonal"
                >
                  {{ formatarAcaoLabel(log.acao) }}
                </VChip>
              </td>

              <td>
                <VChip
                  size="small"
                  variant="outlined"
                  :color="log.entidade === 'itens' ? 'primary' : 'secondary'"
                >
                  {{ log.entidade === 'itens' ? 'Item' : 'Fornecedor' }}
                  <span
                    v-if="log.entidade_id"
                    class="ms-1 font-weight-bold"
                  >#{{ log.entidade_id }}</span>
                </VChip>
              </td>

              <td class="text-caption">
                {{ formatarDetalhes(log.detalhes) }}
              </td>
            </tr>

            <tr v-if="logs.length === 0">
              <td
                colspan="5"
                class="text-center py-6 text-medium-emphasis"
              >
                Nenhum registro de alteração de estoque ou fornecedor encontrado.
              </td>
            </tr>
          </tbody>
        </VTable>
      </div>
    </VCard>
  </div>
</template>
