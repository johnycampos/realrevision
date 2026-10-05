<route lang="yaml">
meta:
  menuKey: comissoes
</route>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import comissoesApi from '@/server/Comissoes'
import usuariosApi from '@/server/Usuarios'

// Usuário logado e permissões
const currentUser = computed(() => {
  try {
    return JSON.parse(localStorage.getItem('userData') || '{}')
  } catch (e) {
    return {}
  }
})

const isSuperAdmin = computed(() => currentUser.value.role === 'super_admin')

// Estados
const isLoadingLojas = ref(false)
const isLoadingVendedores = ref(false)
const isLoadingRelatorio = ref(false)
const relatorioGerado = ref(false)
const erro = ref('')

const lojas = ref([])
const vendedores = ref([])

// Filtros
const filtroLoja = ref(null)
const filtroVendedor = ref(null)
const filtroDataInicio = ref('')
const filtroDataFim = ref('')
const filtroPercentual = ref(5)

// Dados do Relatório
const dadosRelatorio = ref({
  percentual_aplicado: 5,
  periodo: { data_inicio: null, data_fim: null },
  vendedores: [],
  totais: {
    quantidade_vendas: 0,
    valor_total_vendas: 0,
    valor_comissao: 0,
  },
})

// Formatadores
const formatarMoeda = valor => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(valor || 0))
}

const formatarData = dataStr => {
  if (!dataStr) return ''
  const partes = dataStr.split('-')
  if (partes.length === 3) {
    return `${partes[2]}/${partes[1]}/${partes[0]}`
  }
  return dataStr
}

// Carregar lojas (para super_admin)
const carregarLojas = async () => {
  if (!isSuperAdmin.value) return
  isLoadingLojas.value = true
  try {
    const res = await usuariosApi.listarLojas()
    if (res?.data) {
      lojas.value = res.data
    }
  } catch (err) {
    console.error('Erro ao carregar lojas:', err)
  } finally {
    isLoadingLojas.value = false
  }
}

// Carregar vendedores conforme loja selecionada
const carregarVendedores = async () => {
  isLoadingVendedores.value = true
  try {
    const params = {}
    if (isSuperAdmin.value && filtroLoja.value) {
      params.loja_id = filtroLoja.value
    }
    const data = await comissoesApi.listarVendedores(params)
    vendedores.value = data || []
  } catch (err) {
    console.error('Erro ao carregar vendedores:', err)
  } finally {
    isLoadingVendedores.value = false
  }
}

// Quando a loja muda, recarrega vendedores e limpa seleção
watch(filtroLoja, () => {
  filtroVendedor.value = null
  carregarVendedores()
})

// Gerar Relatório
const gerarRelatorio = async () => {
  erro.value = ''

  if (filtroPercentual.value === null || filtroPercentual.value === '' || Number(filtroPercentual.value) <= 0 || Number(filtroPercentual.value) > 100) {
    erro.value = 'Por favor, informe uma porcentagem de comissão válida entre 0.01% e 100%.'
    return
  }

  isLoadingRelatorio.value = true
  relatorioGerado.value = false

  try {
    const params = {
      percentual: filtroPercentual.value,
    }

    if (isSuperAdmin.value && filtroLoja.value) {
      params.loja_id = filtroLoja.value
    }

    if (filtroVendedor.value) {
      params.vendedor_id = filtroVendedor.value
    }

    if (filtroDataInicio.value) {
      params.data_inicio = filtroDataInicio.value
    }

    if (filtroDataFim.value) {
      params.data_fim = filtroDataFim.value
    }

    const data = await comissoesApi.obterRelatorioComissao(params)
    dadosRelatorio.value = data
    relatorioGerado.value = true
  } catch (err) {
    console.error('Erro ao gerar relatório de comissões:', err)
    erro.value = err?.response?.data?.error || 'Erro ao gerar o relatório de comissões. Tente novamente.'
  } finally {
    isLoadingRelatorio.value = false
  }
}

// Limpar Filtros
const limparFiltros = () => {
  filtroLoja.value = null
  filtroVendedor.value = null
  filtroDataInicio.value = ''
  filtroDataFim.value = ''
  filtroPercentual.value = 5
  erro.value = ''
  relatorioGerado.value = false
  dadosRelatorio.value = {
    percentual_aplicado: 5,
    periodo: { data_inicio: null, data_fim: null },
    vendedores: [],
    totais: { quantidade_vendas: 0, valor_total_vendas: 0, valor_comissao: 0 },
  }
}

onMounted(async () => {
  await carregarLojas()
  await carregarVendedores()
})
</script>

<template>
  <div>
    <!-- Cabeçalho -->
    <VRow class="mb-2">
      <VCol cols="12">
        <div class="d-flex align-center gap-3">
          <VAvatar color="primary" variant="tonal" rounded size="44">
            <VIcon icon="mdi-percent" size="28" />
          </VAvatar>
          <div>
            <h2 class="text-h5 font-weight-bold mb-0">Relatório de Comissão do Vendedor</h2>
            <p class="text-body-2 text-medium-emphasis mb-0">
              Calcule as comissões sobre as vendas de cada vendedor por período e percentual parametrizável
            </p>
          </div>
        </div>
      </VCol>
    </VRow>

    <!-- Alerta de Erro -->
    <VAlert
      v-if="erro"
      type="error"
      variant="tonal"
      closable
      class="mb-4"
      @click:close="erro = ''"
    >
      {{ erro }}
    </VAlert>

    <!-- Card de Filtros -->
    <VCard class="mb-6">
      <VCardItem>
        <VCardTitle class="text-base font-weight-semibold">
          <VIcon icon="mdi-filter-variant" size="20" class="me-2" />
          Filtros do Relatório
        </VCardTitle>
      </VCardItem>

      <VCardText>
        <VRow>
          <!-- Filtro de Loja (apenas super_admin) -->
          <VCol
            v-if="isSuperAdmin"
            cols="12"
            sm="6"
            md="3"
          >
            <VSelect
              v-model="filtroLoja"
              :items="lojas"
              item-title="nome"
              item-value="id"
              label="Filtrar por Loja"
              placeholder="Todas as Lojas"
              clearable
              density="comfortable"
              :loading="isLoadingLojas"
            />
          </VCol>

          <!-- Filtro de Vendedor -->
          <VCol
            cols="12"
            sm="6"
            :md="isSuperAdmin ? 3 : 4"
          >
            <VSelect
              v-model="filtroVendedor"
              :items="vendedores"
              item-title="username"
              item-value="id"
              label="Filtrar por Vendedor"
              placeholder="Todos os Vendedores"
              clearable
              density="comfortable"
              :loading="isLoadingVendedores"
            >
              <template #item="{ props, item }">
                <VListItem v-bind="props">
                  <template #subtitle v-if="isSuperAdmin && !filtroLoja">
                    <span class="text-caption text-medium-emphasis">{{ item.raw.loja_nome || `Loja #${item.raw.loja_id}` }}</span>
                  </template>
                </VListItem>
              </template>
            </VSelect>
          </VCol>

          <!-- Data Início -->
          <VCol
            cols="12"
            sm="6"
            :md="isSuperAdmin ? 2 : 3"
          >
            <VTextField
              v-model="filtroDataInicio"
              type="date"
              label="Data Inicial"
              density="comfortable"
              clearable
            />
          </VCol>

          <!-- Data Fim -->
          <VCol
            cols="12"
            sm="6"
            :md="isSuperAdmin ? 2 : 3"
          >
            <VTextField
              v-model="filtroDataFim"
              type="date"
              label="Data Final"
              density="comfortable"
              clearable
            />
          </VCol>

          <!-- Porcentagem de Comissão -->
          <VCol
            cols="12"
            sm="6"
            :md="isSuperAdmin ? 2 : 2"
          >
            <VTextField
              v-model.number="filtroPercentual"
              type="number"
              step="0.1"
              min="0.1"
              max="100"
              label="Comissão (%)"
              suffix="%"
              density="comfortable"
              :rules="[v => (v > 0 && v <= 100) || 'Entre 0.1 e 100%']"
            />
          </VCol>
        </VRow>

        <div class="d-flex justify-end gap-3 mt-4">
          <VBtn
            variant="outlined"
            color="secondary"
            prepend-icon="mdi-restore"
            @click="limparFiltros"
          >
            Limpar
          </VBtn>
          <VBtn
            color="primary"
            prepend-icon="mdi-magnify"
            :loading="isLoadingRelatorio"
            @click="gerarRelatorio"
          >
            Gerar Relatório
          </VBtn>
        </div>
      </VCardText>
    </VCard>

    <!-- Indicador de Loading Geral -->
    <div v-if="isLoadingRelatorio" class="text-center py-12">
      <VProgressCircular indeterminate color="primary" size="48" class="mb-3" />
      <p class="text-body-2 text-medium-emphasis">Calculando vendas e comissões...</p>
    </div>

    <!-- Resultados -->
    <div v-else-if="relatorioGerado">
      <!-- Cards de Totais / KPIs -->
      <VRow class="mb-6">
        <VCol cols="12" sm="6" md="3">
          <VCard variant="tonal" color="primary">
            <VCardText class="d-flex align-center gap-3">
              <VAvatar color="primary" rounded size="40">
                <VIcon icon="mdi-cash-register" size="24" />
              </VAvatar>
              <div>
                <p class="text-caption mb-0 font-weight-medium">Total em Vendas</p>
                <h3 class="text-h6 font-weight-bold mb-0">
                  {{ formatarMoeda(dadosRelatorio.totais.valor_total_vendas) }}
                </h3>
              </div>
            </VCardText>
          </VCard>
        </VCol>

        <VCol cols="12" sm="6" md="3">
          <VCard variant="tonal" color="success">
            <VCardText class="d-flex align-center gap-3">
              <VAvatar color="success" rounded size="40">
                <VIcon icon="mdi-percent" size="24" />
              </VAvatar>
              <div>
                <p class="text-caption mb-0 font-weight-medium">Total de Comissão</p>
                <h3 class="text-h6 font-weight-bold mb-0">
                  {{ formatarMoeda(dadosRelatorio.totais.valor_comissao) }}
                </h3>
              </div>
            </VCardText>
          </VCard>
        </VCol>

        <VCol cols="12" sm="6" md="3">
          <VCard variant="tonal" color="info">
            <VCardText class="d-flex align-center gap-3">
              <VAvatar color="info" rounded size="40">
                <VIcon icon="mdi-receipt-text-check" size="24" />
              </VAvatar>
              <div>
                <p class="text-caption mb-0 font-weight-medium">Qtd. de Vendas</p>
                <h3 class="text-h6 font-weight-bold mb-0">
                  {{ dadosRelatorio.totais.quantidade_vendas }}
                </h3>
              </div>
            </VCardText>
          </VCard>
        </VCol>

        <VCol cols="12" sm="6" md="3">
          <VCard variant="tonal" color="warning">
            <VCardText class="d-flex align-center gap-3">
              <VAvatar color="warning" rounded size="40">
                <VIcon icon="mdi-calculator" size="24" />
              </VAvatar>
              <div>
                <p class="text-caption mb-0 font-weight-medium">Taxa Aplicada</p>
                <h3 class="text-h6 font-weight-bold mb-0">
                  {{ dadosRelatorio.percentual_aplicado }}%
                </h3>
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>

      <!-- Tabela Detalhada por Vendedor -->
      <VCard>
        <VCardItem class="pb-2">
          <div class="d-flex justify-space-between align-center flex-wrap gap-2">
            <div>
              <VCardTitle class="text-base font-weight-semibold">
                Detalhamento por Vendedor
              </VCardTitle>
              <VCardSubtitle v-if="dadosRelatorio.periodo.data_inicio || dadosRelatorio.periodo.data_fim">
                Período:
                <span v-if="dadosRelatorio.periodo.data_inicio"> de {{ formatarData(dadosRelatorio.periodo.data_inicio) }}</span>
                <span v-if="dadosRelatorio.periodo.data_fim"> até {{ formatarData(dadosRelatorio.periodo.data_fim) }}</span>
              </VCardSubtitle>
            </div>
            <VChip color="primary" variant="tonal" size="small">
              {{ dadosRelatorio.vendedores.length }} vendedor(es)
            </VChip>
          </div>
        </VCardItem>

        <VCardText class="px-0">
          <VTable v-if="dadosRelatorio.vendedores.length > 0" hover class="text-no-wrap">
            <thead>
              <tr>
                <th class="text-left font-weight-bold">VENDEDOR</th>
                <th v-if="isSuperAdmin && !filtroLoja" class="text-left font-weight-bold">LOJA</th>
                <th class="text-center font-weight-bold">QTD. VENDAS</th>
                <th class="text-right font-weight-bold">TOTAL VENDIDO</th>
                <th class="text-right font-weight-bold">COMISSÃO ({{ dadosRelatorio.percentual_aplicado }}%)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="vendedor in dadosRelatorio.vendedores" :key="`${vendedor.vendedor_id}-${vendedor.loja_id}`">
                <td>
                  <div class="d-flex align-center gap-2">
                    <VAvatar size="28" color="primary" variant="tonal">
                      <VIcon icon="mdi-account" size="16" />
                    </VAvatar>
                    <span class="font-weight-medium">{{ vendedor.vendedor_nome }}</span>
                  </div>
                </td>
                <td v-if="isSuperAdmin && !filtroLoja">
                  <VChip size="x-small" variant="outlined" color="primary">
                    {{ vendedor.loja_nome }}
                  </VChip>
                </td>
                <td class="text-center">
                  <VChip size="small" variant="tonal" color="info">
                    {{ vendedor.quantidade_vendas }}
                  </VChip>
                </td>
                <td class="text-right font-weight-medium">
                  {{ formatarMoeda(vendedor.valor_total_vendas) }}
                </td>
                <td class="text-right font-weight-bold text-success">
                  {{ formatarMoeda(vendedor.valor_comissao) }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="bg-var-theme-surface font-weight-bold">
                <td>TOTAL GERAL</td>
                <td v-if="isSuperAdmin && !filtroLoja"></td>
                <td class="text-center">{{ dadosRelatorio.totais.quantidade_vendas }}</td>
                <td class="text-right">{{ formatarMoeda(dadosRelatorio.totais.valor_total_vendas) }}</td>
                <td class="text-right text-success">{{ formatarMoeda(dadosRelatorio.totais.valor_comissao) }}</td>
              </tr>
            </tfoot>
          </VTable>

          <!-- Estado Nenhum Resultado -->
          <div v-else class="text-center py-10">
            <VAvatar color="warning" variant="tonal" size="56" class="mb-3">
              <VIcon icon="mdi-alert-circle-outline" size="32" />
            </VAvatar>
            <h4 class="text-h6 font-weight-medium mb-1">Nenhuma venda encontrada</h4>
            <p class="text-body-2 text-medium-emphasis">
              Não foram encontradas vendas para os filtros e período informados.
            </p>
          </div>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>
