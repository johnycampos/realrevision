<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import vendasApi from '@/server/Vendas'
import usuariosApi from '@/server/Usuarios'

definePage({
  meta: {
    menuKey: 'vendas',
  },
})

const router = useRouter()

// Usuário logado
const currentUser = computed(() => {
  try {
    return JSON.parse(localStorage.getItem('userData') || '{}')
  } catch (e) {
    return {}
  }
})

const isSuperAdmin = computed(() => currentUser.value.role === 'super_admin')

// Estados
const loading = ref(false)
const vendas = ref([])
const lojas = ref([])
const erro = ref('')

// Filtros
const filtroLoja = ref(null)
const filtroDataInicio = ref('')
const filtroDataFim = ref('')

// Modal de detalhes da venda
const dialogDetalhes = ref(false)
const vendaSelecionada = ref(null)

// Formatadores
const formatarMoeda = valor => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor || 0)
}

const formatarData = dataIso => {
  if (!dataIso) return '-'
  const d = new Date(dataIso)
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Métricas do resultado filtrado
const totalFaturado = computed(() => {
  return vendas.value.reduce((acc, v) => acc + parseFloat(v.valor_total || 0), 0)
})

const totalTransacoes = computed(() => vendas.value.length)

const ticketMedio = computed(() => {
  if (totalTransacoes.value === 0) return 0
  return totalFaturado.value / totalTransacoes.value
})

// Carregamento de dados
const carregarVendas = async () => {
  loading.value = true
  erro.value = ''
  try {
    const filtros = {}
    if (isSuperAdmin.value && filtroLoja.value) {
      filtros.loja_id = filtroLoja.value
    }
    if (filtroDataInicio.value) {
      filtros.data_inicio = filtroDataInicio.value
    }
    if (filtroDataFim.value) {
      filtros.data_fim = filtroDataFim.value
    }

    const res = await vendasApi.listarVendas(filtros)
    if (res && res.data) {
      vendas.value = res.data
    }
  } catch (err) {
    console.error('Erro ao carregar histórico de vendas:', err)
    erro.value = 'Não foi possível carregar as vendas para o filtro selecionado.'
  } finally {
    loading.value = false
  }
}

const limparFiltros = () => {
  filtroLoja.value = null
  filtroDataInicio.value = ''
  filtroDataFim.value = ''
  carregarVendas()
}

const carregarLojas = async () => {
  if (!isSuperAdmin.value) return
  try {
    const res = await usuariosApi.listarLojas()
    if (res && res.data) {
      lojas.value = res.data
    }
  } catch (err) {
    console.error('Erro ao listar lojas:', err)
  }
}

const abrirDetalhes = venda => {
  vendaSelecionada.value = venda
  dialogDetalhes.value = true
}

const irParaPdv = () => {
  router.push({ name: 'venda-ponto1' })
}

onMounted(async () => {
  if (isSuperAdmin.value) {
    await carregarLojas()
  }
  await carregarVendas()
})
</script>

<template>
  <div>
    <!-- Cabeçalho com ações -->
    <VCard class="mb-6">
      <VCardText class="d-flex flex-wrap justify-space-between align-center gap-4">
        <div>
          <h4 class="text-h5 font-weight-bold mb-1">
            🛒 Histórico de Vendas
          </h4>
          <span class="text-subtitle-2 text-medium-emphasis">
            Consulte transações realizadas com filtros por loja e período.
          </span>
        </div>

        <div class="d-flex align-center gap-3">
          <VBtn
            color="success"
            prepend-icon="mdi-plus"
            @click="irParaPdv"
          >
            Nova Venda (PDV)
          </VBtn>
        </div>
      </VCardText>
    </VCard>

    <!-- Barra de Filtros -->
    <VCard
      border
      class="mb-6"
    >
      <VCardItem>
        <VCardTitle class="d-flex align-center">
          <VIcon
            icon="mdi-filter-variant"
            class="me-2 text-primary"
          />
          Filtros de Pesquisa
        </VCardTitle>
      </VCardItem>
      <VCardText>
        <VRow align="center">
          <!-- Filtro de Loja (se super_admin) -->
          <VCol
            v-if="isSuperAdmin"
            cols="12"
            sm="4"
            md="3"
          >
            <VSelect
              v-model="filtroLoja"
              :items="[
                { id: null, nome: 'Todas as Lojas' },
                ...lojas.map(l => ({ id: l.id, nome: `${l.is_matriz ? '⭐ ' : ''}${l.nome}` }))
              ]"
              item-title="nome"
              item-value="id"
              label="Filtrar por Loja"
              density="compact"
              variant="outlined"
              hide-details
            />
          </VCol>

          <!-- Data Início -->
          <VCol
            cols="12"
            sm="4"
            md="3"
          >
            <VTextField
              v-model="filtroDataInicio"
              type="date"
              label="Data Início"
              density="compact"
              variant="outlined"
              hide-details
            />
          </VCol>

          <!-- Data Fim -->
          <VCol
            cols="12"
            sm="4"
            md="3"
          >
            <VTextField
              v-model="filtroDataFim"
              type="date"
              label="Data Fim"
              density="compact"
              variant="outlined"
              hide-details
            />
          </VCol>

          <!-- Botões Filtrar / Limpar -->
          <VCol
            cols="12"
            sm="12"
            md="3"
            class="d-flex gap-2"
          >
            <VBtn
              color="primary"
              :loading="loading"
              prepend-icon="mdi-magnify"
              @click="carregarVendas"
            >
              Filtrar
            </VBtn>
            <VBtn
              variant="tonal"
              color="secondary"
              @click="limparFiltros"
            >
              Limpar
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <!-- Indicadores do Período Filtrado -->
    <VRow class="mb-6">
      <VCol
        cols="12"
        sm="4"
      >
        <VCard border>
          <VCardText class="d-flex align-center">
            <VAvatar
              size="44"
              rounded
              color="primary"
              variant="tonal"
              class="me-3"
            >
              <VIcon
                icon="mdi-cash-multiple"
                size="26"
              />
            </VAvatar>
            <div>
              <span class="text-caption text-medium-emphasis">Total Faturado</span>
              <h5 class="text-h6 font-weight-bold text-primary">
                {{ formatarMoeda(totalFaturado) }}
              </h5>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        cols="12"
        sm="4"
      >
        <VCard border>
          <VCardText class="d-flex align-center">
            <VAvatar
              size="44"
              rounded
              color="info"
              variant="tonal"
              class="me-3"
            >
              <VIcon
                icon="mdi-receipt"
                size="26"
              />
            </VAvatar>
            <div>
              <span class="text-caption text-medium-emphasis">Total de Vendas</span>
              <h5 class="text-h6 font-weight-bold">
                {{ totalTransacoes }} transações
              </h5>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        cols="12"
        sm="4"
      >
        <VCard border>
          <VCardText class="d-flex align-center">
            <VAvatar
              size="44"
              rounded
              color="success"
              variant="tonal"
              class="me-3"
            >
              <VIcon
                icon="mdi-scale-balance"
                size="26"
              />
            </VAvatar>
            <div>
              <span class="text-caption text-medium-emphasis">Ticket Médio</span>
              <h5 class="text-h6 font-weight-bold text-success">
                {{ formatarMoeda(ticketMedio) }}
              </h5>
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <!-- Alerta de erro -->
    <VAlert
      v-if="erro"
      type="error"
      variant="tonal"
      closable
      class="mb-6"
    >
      {{ erro }}
    </VAlert>

    <!-- Tabela de Vendas -->
    <VCard border>
      <VCardItem>
        <div class="d-flex justify-space-between align-center">
          <VCardTitle class="d-flex align-center">
            <VIcon
              icon="mdi-format-list-bulleted"
              class="me-2 text-primary"
            />
            Transações Realizadas ({{ vendas.length }})
          </VCardTitle>

          <VBtn
            icon
            size="small"
            variant="text"
            :loading="loading"
            @click="carregarVendas"
          >
            <VIcon icon="mdi-refresh" />
          </VBtn>
        </div>
      </VCardItem>

      <VDivider />

      <VTable
        v-if="vendas.length > 0"
        class="text-no-wrap"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>DATA / HORA</th>
            <th v-if="isSuperAdmin">
              LOJA
            </th>
            <th>VENDEDOR</th>
            <th>PAGAMENTO</th>
            <th class="text-end">
              TOTAL
            </th>
            <th class="text-center">
              AÇÕES
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="v in vendas"
            :key="v.id"
          >
            <td class="font-weight-bold text-primary">
              #{{ v.id }}
            </td>
            <td>
              {{ formatarData(v.data_venda) }}
            </td>
            <td v-if="isSuperAdmin">
              <VChip
                size="small"
                variant="outlined"
              >
                {{ v.loja_nome || `Loja ${v.loja_id}` }}
              </VChip>
            </td>
            <td>
              {{ v.vendedor_nome || '-' }}
            </td>
            <td>
              <VChip
                color="secondary"
                size="small"
                variant="tonal"
              >
                {{ v.forma_pagamento }}
                <span v-if="v.parcelas && v.parcelas > 1"> ({{ v.parcelas }}x)</span>
              </VChip>
            </td>
            <td class="text-end font-weight-bold">
              {{ formatarMoeda(v.valor_total) }}
            </td>
            <td class="text-center">
              <VBtn
                variant="tonal"
                color="primary"
                size="small"
                prepend-icon="mdi-eye-outline"
                @click="abrirDetalhes(v)"
              >
                Ver Itens
              </VBtn>
            </td>
          </tr>
        </tbody>
      </VTable>

      <VCardText
        v-else-if="!loading"
        class="text-center py-8"
      >
        <VIcon
          icon="mdi-cart-off"
          size="48"
          color="secondary"
          class="mb-2"
        />
        <h6 class="text-h6 text-medium-emphasis">
          Nenhuma venda encontrada
        </h6>
        <p class="text-caption text-medium-emphasis mb-0">
          Ajuste os filtros de pesquisa ou realize uma nova venda no PDV.
        </p>
      </VCardText>
    </VCard>

    <!-- Diálogo Modal: Detalhes dos Itens da Venda -->
    <VDialog
      v-model="dialogDetalhes"
      max-width="700"
    >
      <VCard v-if="vendaSelecionada">
        <VCardItem class="pb-2">
          <div class="d-flex justify-space-between align-center">
            <VCardTitle class="text-h6 font-weight-bold">
              Detalhes da Venda #{{ vendaSelecionada.id }}
            </VCardTitle>
            <VBtn
              icon
              variant="text"
              size="small"
              @click="dialogDetalhes = false"
            >
              <VIcon icon="mdi-close" />
            </VBtn>
          </div>
        </VCardItem>

        <VCardText>
          <VRow class="mb-4">
            <VCol
              cols="6"
              sm="3"
            >
              <span class="text-caption text-medium-emphasis">Data:</span>
              <div class="font-weight-medium">
                {{ formatarData(vendaSelecionada.data_venda) }}
              </div>
            </VCol>
            <VCol
              cols="6"
              sm="3"
            >
              <span class="text-caption text-medium-emphasis">Loja:</span>
              <div class="font-weight-medium">
                {{ vendaSelecionada.loja_nome || `Loja ${vendaSelecionada.loja_id}` }}
              </div>
            </VCol>
            <VCol
              cols="6"
              sm="3"
            >
              <span class="text-caption text-medium-emphasis">Forma Pagto:</span>
              <div class="font-weight-medium">
                {{ vendaSelecionada.forma_pagamento }}
              </div>
            </VCol>
            <VCol
              cols="6"
              sm="3"
            >
              <span class="text-caption text-medium-emphasis">Valor Total:</span>
              <div class="font-weight-bold text-primary">
                {{ formatarMoeda(vendaSelecionada.valor_total) }}
              </div>
            </VCol>
          </VRow>

          <h6 class="text-subtitle-2 font-weight-bold mb-2">
            Itens da Venda:
          </h6>

          <VTable density="compact">
            <thead>
              <tr>
                <th>ITEM ID</th>
                <th class="text-center">
                  QTD
                </th>
                <th class="text-end">
                  PREÇO UNIT.
                </th>
                <th class="text-end">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, idx) in (vendaSelecionada.itens || [])"
                :key="idx"
              >
                <td>Item #{{ item.item_id }}</td>
                <td class="text-center">
                  {{ item.quantidade }}
                </td>
                <td class="text-end">
                  {{ formatarMoeda(item.preco_unitario) }}
                </td>
                <td class="text-end font-weight-medium">
                  {{ formatarMoeda(item.valor_total_item) }}
                </td>
              </tr>
            </tbody>
          </VTable>
        </VCardText>

        <VCardActions class="justify-end">
          <VBtn
            variant="tonal"
            color="secondary"
            @click="dialogDetalhes = false"
          >
            Fechar
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>
