<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import VueApexCharts from 'vue3-apexcharts'
import dashboardApi from '@/server/Dashboard'
import usuariosApi from '@/server/Usuarios'

// Metadados de rota para autorização por menu
definePage({
  meta: {
    menuKey: 'dashboard',
  },
})

const router = useRouter()

// Dados do usuário logado
const currentUser = computed(() => {
  try {
    return JSON.parse(localStorage.getItem('userData') || '{}')
  } catch (e) {
    return {}
  }
})

const isSuperAdmin = computed(() => currentUser.value.role === 'super_admin')
const isAdminLoja = computed(() => currentUser.value.role === 'admin_loja')

// Estados de carregamento e dados
const loading = ref(false)
const erro = ref('')
const lojaSelecionada = ref(null)
const lojas = ref([])

// Dados do resumo
const resumoConsolidado = ref({
  total_hoje: 0,
  qtd_hoje: 0,
  total_semana: 0,
  qtd_semana: 0,
  total_mes: 0,
  qtd_mes: 0,
  ticket_medio_hoje: 0,
  ticket_medio_mes: 0,
  itens_estoque_baixo_count: 0,
})

const dadosPorLoja = ref([])
const itensEstoqueBaixo = ref([])

// Dados do comparativo de lojas (exclusivo super_admin)
const comparativoLojas = ref({
  total_grupo_30_dias: 0,
  lojas: [],
  serie_diaria: [],
})

// Formatadores
const formatarMoeda = valor => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor || 0)
}

const formatarNumero = valor => {
  return new Intl.NumberFormat('pt-BR').format(valor || 0)
}

// Opções e séries do Gráfico Donut de Participação por Loja
const chartDonutOptions = computed(() => {
  const labels = comparativoLojas.value.lojas.map(l => l.loja_nome || `Loja ${l.loja_id}`)
  return {
    chart: {
      type: 'donut',
      toolbar: { show: false },
    },
    labels: labels.length > 0 ? labels : ['Sem dados'],
    colors: ['#7367F0', '#28C76F', '#FF9F43', '#EA5455'],
    legend: {
      position: 'bottom',
      fontSize: '13px',
    },
    dataLabels: {
      enabled: true,
      formatter: val => `${val.toFixed(1)}%`,
    },
    tooltip: {
      y: {
        formatter: val => formatarMoeda(val),
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total 30d',
              formatter: () => formatarMoeda(comparativoLojas.value.total_grupo_30_dias),
            },
          },
        },
      },
    },
  }
})

const chartDonutSeries = computed(() => {
  const series = comparativoLojas.value.lojas.map(l => parseFloat(l.valor_total || 0))
  const temValor = series.some(v => v > 0)
  return temValor ? series : [1]
})

// Opções e séries do Gráfico de Barras de Faturamento por Loja (30 dias)
const chartBarOptions = computed(() => {
  const categories = comparativoLojas.value.lojas.map(l => l.loja_nome)
  return {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '45%',
        distributed: true,
      },
    },
    colors: ['#7367F0', '#28C76F', '#FF9F43'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: categories.length > 0 ? categories : ['Lojas'],
    },
    yaxis: {
      labels: {
        formatter: val => `R$ ${val.toLocaleString('pt-BR')}`,
      },
    },
    tooltip: {
      y: {
        formatter: val => formatarMoeda(val),
      },
    },
  }
})

const chartBarSeries = computed(() => {
  const data = comparativoLojas.value.lojas.map(l => parseFloat(l.valor_total || 0))
  return [
    {
      name: 'Faturamento (30d)',
      data: data.length > 0 ? data : [0],
    },
  ]
})

// Carregamento de dados
const carregarDados = async () => {
  loading.value = true
  erro.value = ''
  try {
    const resResumo = await dashboardApi.obterResumo(lojaSelecionada.value)
    if (resResumo && resResumo.data) {
      resumoConsolidado.value = resResumo.data.consolidado || {}
      dadosPorLoja.value = resResumo.data.por_loja || []
      itensEstoqueBaixo.value = resResumo.data.itens_estoque_baixo || []
    }

    if (isSuperAdmin.value) {
      const resComparativo = await dashboardApi.obterComparativoLojas()
      if (resComparativo && resComparativo.data) {
        comparativoLojas.value = resComparativo.data
      }
    }
  } catch (err) {
    console.error('Erro ao carregar dashboard:', err)
    erro.value = 'Não foi possível carregar os dados atualizados do dashboard.'
  } finally {
    loading.value = false
  }
}

const carregarLojas = async () => {
  if (!isSuperAdmin.value) return
  try {
    const res = await usuariosApi.listarLojas()
    if (res && res.data) {
      lojas.value = res.data
    }
  } catch (err) {
    console.error('Erro ao listar lojas para filtro:', err)
  }
}

const navegarParaEstoque = () => {
  router.push({ name: 'estoque-list' })
}

onMounted(async () => {
  if (isSuperAdmin.value) {
    await carregarLojas()
  }
  await carregarDados()
})
</script>

<template>
  <div>
    <!-- Cabeçalho do Dashboard com Filtro por Loja -->
    <VCard class="mb-6">
      <VCardText class="d-flex flex-wrap justify-space-between align-center gap-4">
        <div>
          <h4 class="text-h5 font-weight-bold mb-1">
            <span v-if="isSuperAdmin">🏢 Visão Geral Consolidada — 3 Lojas</span>
            <span v-else-if="isAdminLoja">🏪 Dashboard da Loja</span>
            <span v-else>📊 Painel Operacional</span>
          </h4>
          <span class="text-subtitle-2 text-medium-emphasis">
            Acompanhe o faturamento, ticket médio e alertas de estoque em tempo real.
          </span>
        </div>

        <div class="d-flex align-center gap-3">
          <!-- Filtro de Loja para super_admin -->
          <div
            v-if="isSuperAdmin"
            style="min-width: 260px;"
          >
            <VSelect
              v-model="lojaSelecionada"
              :items="[
                { id: null, nome: '🌐 Todas as Lojas (Consolidado)' },
                ...lojas.map(l => ({ id: l.id, nome: `${l.is_matriz ? '⭐ ' : ''}${l.nome}` }))
              ]"
              item-title="nome"
              item-value="id"
              label="Filtrar por Loja"
              density="compact"
              variant="outlined"
              hide-details
              @update:model-value="carregarDados"
            />
          </div>

          <VBtn
            color="primary"
            variant="tonal"
            :loading="loading"
            prepend-icon="mdi-refresh"
            @click="carregarDados"
          >
            Atualizar
          </VBtn>
        </div>
      </VCardText>
    </VCard>

    <!-- Alerta de Erro se houver -->
    <VAlert
      v-if="erro"
      type="error"
      variant="tonal"
      closable
      class="mb-6"
    >
      {{ erro }}
    </VAlert>

    <!-- LINHA 1: Cards Principais de Indicadores -->
    <VRow class="mb-6">
      <!-- Vendas Hoje -->
      <VCol
        cols="12"
        sm="6"
        md="3"
      >
        <VCard border>
          <VCardText class="d-flex align-center">
            <VAvatar
              size="48"
              rounded
              color="primary"
              variant="tonal"
              class="me-4"
            >
              <VIcon
                icon="mdi-cash-register"
                size="28"
              />
            </VAvatar>
            <div>
              <span class="text-caption text-medium-emphasis">Vendas Hoje</span>
              <h5 class="text-h5 font-weight-bold">
                {{ formatarMoeda(resumoConsolidado.total_hoje) }}
              </h5>
              <span class="text-xs text-primary font-weight-medium">
                {{ formatarNumero(resumoConsolidado.qtd_hoje) }} transações
              </span>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <!-- Vendas Semana -->
      <VCol
        cols="12"
        sm="6"
        md="3"
      >
        <VCard border>
          <VCardText class="d-flex align-center">
            <VAvatar
              size="48"
              rounded
              color="info"
              variant="tonal"
              class="me-4"
            >
              <VIcon
                icon="mdi-calendar-week"
                size="28"
              />
            </VAvatar>
            <div>
              <span class="text-caption text-medium-emphasis">Vendas Semana Atual</span>
              <h5 class="text-h5 font-weight-bold">
                {{ formatarMoeda(resumoConsolidado.total_semana) }}
              </h5>
              <span class="text-xs text-info font-weight-medium">
                {{ formatarNumero(resumoConsolidado.qtd_semana) }} transações
              </span>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <!-- Vendas Mês -->
      <VCol
        cols="12"
        sm="6"
        md="3"
      >
        <VCard border>
          <VCardText class="d-flex align-center">
            <VAvatar
              size="48"
              rounded
              color="success"
              variant="tonal"
              class="me-4"
            >
              <VIcon
                icon="mdi-chart-line"
                size="28"
              />
            </VAvatar>
            <div>
              <span class="text-caption text-medium-emphasis">Vendas Mês Atual</span>
              <h5 class="text-h5 font-weight-bold">
                {{ formatarMoeda(resumoConsolidado.total_mes) }}
              </h5>
              <span class="text-xs text-success font-weight-medium">
                {{ formatarNumero(resumoConsolidado.qtd_mes) }} transações
              </span>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <!-- Ticket Médio Mês -->
      <VCol
        cols="12"
        sm="6"
        md="3"
      >
        <VCard border>
          <VCardText class="d-flex align-center">
            <VAvatar
              size="48"
              rounded
              color="warning"
              variant="tonal"
              class="me-4"
            >
              <VIcon
                icon="mdi-scale-balance"
                size="28"
              />
            </VAvatar>
            <div>
              <span class="text-caption text-medium-emphasis">Ticket Médio (Mês)</span>
              <h5 class="text-h5 font-weight-bold">
                {{ formatarMoeda(resumoConsolidado.ticket_medio_mes) }}
              </h5>
              <span class="text-xs text-medium-emphasis">
                Hoje: {{ formatarMoeda(resumoConsolidado.ticket_medio_hoje) }}
              </span>
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <!-- LINHA 2: Cards Individuais das 3 Lojas (Visível quando super_admin sem filtro específico) -->
    <div
      v-if="isSuperAdmin && !lojaSelecionada && dadosPorLoja.length > 0"
      class="mb-6"
    >
      <div class="d-flex align-center mb-3">
        <VIcon
          icon="mdi-store"
          class="me-2 text-primary"
        />
        <h5 class="text-h6 font-weight-bold">
          Desempenho por Loja do Grupo
        </h5>
      </div>

      <VRow>
        <VCol
          v-for="loja in dadosPorLoja"
          :key="loja.loja_id"
          cols="12"
          md="4"
        >
          <VCard
            border
            class="h-100"
          >
            <VCardItem class="pb-2">
              <template #title>
                <div class="d-flex align-center justify-space-between">
                  <span class="text-base font-weight-bold">{{ loja.loja_nome }}</span>
                  <VChip
                    v-if="loja.is_matriz"
                    color="primary"
                    size="small"
                    variant="tonal"
                  >
                    Matriz
                  </VChip>
                  <VChip
                    v-else
                    color="secondary"
                    size="small"
                    variant="tonal"
                  >
                    Filial
                  </VChip>
                </div>
              </template>
            </VCardItem>

            <VCardText>
              <div class="d-flex justify-space-between py-2 border-b">
                <span class="text-caption text-medium-emphasis">Vendas Hoje:</span>
                <span class="font-weight-semibold text-primary">
                  {{ formatarMoeda(loja.total_hoje) }} ({{ loja.qtd_hoje }})
                </span>
              </div>

              <div class="d-flex justify-space-between py-2 border-b">
                <span class="text-caption text-medium-emphasis">Vendas no Mês:</span>
                <span class="font-weight-semibold text-success">
                  {{ formatarMoeda(loja.total_mes) }} ({{ loja.qtd_mes }})
                </span>
              </div>

              <div class="d-flex justify-space-between py-2 border-b">
                <span class="text-caption text-medium-emphasis">Ticket Médio:</span>
                <span class="font-weight-semibold">
                  {{ formatarMoeda(loja.ticket_medio_mes) }}
                </span>
              </div>

              <div class="d-flex justify-space-between align-center pt-2">
                <span class="text-caption text-medium-emphasis">Itens Estoque Baixo:</span>
                <VChip
                  v-if="loja.itens_estoque_baixo_count > 0"
                  color="warning"
                  size="x-small"
                  variant="flat"
                >
                  {{ loja.itens_estoque_baixo_count }} itens
                </VChip>
                <VChip
                  v-else
                  color="success"
                  size="x-small"
                  variant="tonal"
                >
                  Estoque OK
                </VChip>
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </div>

    <!-- LINHA 3: Gráficos Comparativos (Exclusivo super_admin) -->
    <VRow
      v-if="isSuperAdmin && comparativoLojas.lojas.length > 0"
      class="mb-6"
    >
      <!-- Gráfico de Faturamento por Loja -->
      <VCol
        cols="12"
        md="8"
      >
        <VCard
          border
          class="h-100"
        >
          <VCardItem>
            <VCardTitle class="d-flex align-center">
              <VIcon
                icon="mdi-chart-bar"
                class="me-2 text-primary"
              />
              Faturamento Comparativo — Últimos 30 Dias
            </VCardTitle>
          </VCardItem>
          <VCardText>
            <VueApexCharts
              type="bar"
              height="280"
              :options="chartBarOptions"
              :series="chartBarSeries"
            />
          </VCardText>
        </VCard>
      </VCol>

      <!-- Gráfico Donut de Participação por Loja -->
      <VCol
        cols="12"
        md="4"
      >
        <VCard
          border
          class="h-100"
        >
          <VCardItem>
            <VCardTitle class="d-flex align-center">
              <VIcon
                icon="mdi-chart-pie"
                class="me-2 text-info"
              />
              Participação no Grupo
            </VCardTitle>
          </VCardItem>
          <VCardText>
            <VueApexCharts
              type="donut"
              height="280"
              :options="chartDonutOptions"
              :series="chartDonutSeries"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <!-- LINHA 4: Tabela Comparativa Detalhada (super_admin) -->
    <VCard
      v-if="isSuperAdmin && comparativoLojas.lojas.length > 0"
      border
      class="mb-6"
    >
      <VCardItem>
        <VCardTitle class="d-flex align-center">
          <VIcon
            icon="mdi-table"
            class="me-2 text-secondary"
          />
          Detalhamento Comparativo de Desempenho (30 Dias)
        </VCardTitle>
      </VCardItem>
      <VTable class="text-no-wrap">
        <thead>
          <tr>
            <th>LOJA</th>
            <th>TIPO</th>
            <th class="text-center">
              TRANSAÇÕES
            </th>
            <th class="text-end">
              FATURAMENTO TOTAL
            </th>
            <th class="text-end">
              TICKET MÉDIO
            </th>
            <th class="text-end">
              PARTICIPAÇÃO
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="l in comparativoLojas.lojas"
            :key="l.loja_id"
          >
            <td class="font-weight-medium">
              {{ l.loja_nome }}
            </td>
            <td>
              <VChip
                :color="l.is_matriz ? 'primary' : 'secondary'"
                size="small"
                variant="tonal"
              >
                {{ l.is_matriz ? 'Matriz' : 'Filial' }}
              </VChip>
            </td>
            <td class="text-center">
              {{ formatarNumero(l.total_vendas) }}
            </td>
            <td class="text-end font-weight-semibold text-primary">
              {{ formatarMoeda(l.valor_total) }}
            </td>
            <td class="text-end">
              {{ formatarMoeda(l.ticket_medio) }}
            </td>
            <td class="text-end">
              <VChip
                color="info"
                size="small"
                variant="tonal"
              >
                {{ l.participacao_percentual }}%
              </VChip>
            </td>
          </tr>
        </tbody>
      </VTable>
    </VCard>

    <!-- LINHA 5: Card de Alerta de Peças com Estoque Baixo -->
    <VCard
      border
      class="mb-6"
    >
      <VCardItem>
        <div class="d-flex flex-wrap align-center justify-space-between gap-2">
          <div class="d-flex align-center">
            <VAvatar
              size="40"
              rounded
              :color="itensEstoqueBaixo.length > 0 ? 'error' : 'success'"
              variant="tonal"
              class="me-3"
            >
              <VIcon :icon="itensEstoqueBaixo.length > 0 ? 'mdi-alert-circle-outline' : 'mdi-check-circle-outline'" />
            </VAvatar>
            <div>
              <VCardTitle class="text-base font-weight-bold">
                Alerta de Reposição — Itens com Estoque Baixo
              </VCardTitle>
              <span class="text-caption text-medium-emphasis">
                {{ itensEstoqueBaixo.length }} itens com quantidade disponível igual ou abaixo da quantidade mínima recomendada
              </span>
            </div>
          </div>

          <VBtn
            variant="tonal"
            color="primary"
            size="small"
            append-icon="mdi-arrow-right"
            @click="navegarParaEstoque"
          >
            Ir para Gestão de Estoque
          </VBtn>
        </div>
      </VCardItem>

      <VDivider />

      <VTable
        v-if="itensEstoqueBaixo.length > 0"
        class="text-no-wrap"
      >
        <thead>
          <tr>
            <th>ITEM / CÓDIGO</th>
            <th v-if="isSuperAdmin">
              LOJA
            </th>
            <th class="text-center">
              ESTOQUE ATUAL
            </th>
            <th class="text-center">
              ESTOQUE MÍNIMO
            </th>
            <th class="text-center">
              STATUS
            </th>
            <th class="text-end">
              AÇÃO
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in itensEstoqueBaixo"
            :key="item.id"
          >
            <td class="font-weight-medium">
              {{ item.nome }}
              <div class="text-xs text-medium-emphasis">
                ID: #{{ item.id }}
              </div>
            </td>

            <td v-if="isSuperAdmin">
              <VChip
                size="x-small"
                variant="outlined"
              >
                {{ item.loja_nome || `Loja ${item.loja_id}` }}
              </VChip>
            </td>

            <td class="text-center">
              <VChip
                :color="item.quantidade_disponivel <= 0 ? 'error' : 'warning'"
                size="small"
                variant="flat"
              >
                {{ item.quantidade_disponivel }}
              </VChip>
            </td>

            <td class="text-center font-weight-medium">
              {{ item.quantidade_minima }}
            </td>

            <td class="text-center">
              <VChip
                v-if="item.quantidade_disponivel <= 0"
                color="error"
                size="x-small"
                variant="tonal"
              >
                Esgotado
              </VChip>
              <VChip
                v-else
                color="warning"
                size="x-small"
                variant="tonal"
              >
                Estoque Crítico
              </VChip>
            </td>

            <td class="text-end">
              <VBtn
                variant="text"
                color="primary"
                size="x-small"
                icon="mdi-pencil-outline"
                @click="navegarParaEstoque"
              />
            </td>
          </tr>
        </tbody>
      </VTable>

      <VCardText
        v-else
        class="text-center py-8"
      >
        <VIcon
          icon="mdi-check-circle"
          size="48"
          color="success"
          class="mb-2"
        />
        <h6 class="text-h6 text-success">
          Estoque em dia!
        </h6>
        <p class="text-caption text-medium-emphasis mb-0">
          Nenhuma peça com estoque igual ou abaixo do mínimo configurado.
        </p>
      </VCardText>
    </VCard>
  </div>
</template>
