<route lang="yaml">
meta:
  menuKey: relatorios
</route>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import relatoriosApi from '@/server/Relatorios'
import usuariosApi from '@/server/Usuarios'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

// Usuário atual
const currentUser = computed(() => {
  try {
    return JSON.parse(localStorage.getItem('userData') || '{}')
  } catch (e) {
    return {}
  }
})

const isSuperAdmin = computed(() => currentUser.value.role === 'super_admin')

// Estados
const tabAtiva = ref('vendas')
const lojas = ref([])
const erro = ref('')

// Filtros
const filtroLoja = ref(null)
const filtroDataInicio = ref('')
const filtroDataFim = ref('')

// Dados Vendas
const loadingVendas = ref(false)
const dadosVendas = ref({
  vendas: [],
  totais: {
    quantidade_vendas: 0,
    valor_total: 0,
    ticket_medio: 0,
    itens_vendidos_total: 0,
  },
  por_loja: [],
})

// Modal detalhes de venda
const dialogDetalhesVenda = ref(false)
const vendaSelecionada = ref(null)

// Dados Estoque
const loadingEstoque = ref(false)
const dadosEstoque = ref({
  itens: [],
  totais: {
    total_itens: 0,
    total_unidades: 0,
    valor_custo_total: 0,
    total_itens_abaixo_minimo: 0,
  },
  por_loja: [],
})
const filtroApenasAbaixoMinimo = ref(false)

// Itens de estoque filtrados localmente
const itensEstoqueFiltrados = computed(() => {
  if (!dadosEstoque.value.itens) return []
  if (!filtroApenasAbaixoMinimo.value) return dadosEstoque.value.itens
  return dadosEstoque.value.itens.filter(i => i.abaixo_do_minimo)
})

// Formatadores
const formatarMoeda = valor => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(valor || 0))
}

const formatarData = dataStr => {
  if (!dataStr) return '-'
  try {
    const data = new Date(dataStr)
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(data)
  } catch (e) {
    return dataStr
  }
}

const formatarDataSimples = dataStr => {
  if (!dataStr) return ''
  const partes = dataStr.split('-')
  if (partes.length === 3) return `${partes[2]}/${partes[1]}/${partes[0]}`
  return dataStr
}

// Carregar Lojas (super_admin)
const carregarLojas = async () => {
  if (!isSuperAdmin.value) return
  try {
    const response = await usuariosApi.listarLojas()
    lojas.value = response.data || []
  } catch (e) {
    console.error('Erro ao listar lojas:', e)
  }
}

// Carregar Relatório de Vendas
const carregarRelatorioVendas = async () => {
  loadingVendas.value = true
  erro.value = ''
  try {
    const params = {}
    if (filtroLoja.value) params.loja_id = filtroLoja.value
    if (filtroDataInicio.value) params.data_inicio = filtroDataInicio.value
    if (filtroDataFim.value) params.data_fim = filtroDataFim.value

    const data = await relatoriosApi.obterRelatorioVendas(params)
    dadosVendas.value = data
  } catch (e) {
    console.error('Erro ao carregar relatório de vendas:', e)
    erro.value = 'Falha ao carregar relatório de vendas. Verifique os filtros e tente novamente.'
  } finally {
    loadingVendas.value = false
  }
}

// Carregar Relatório de Estoque
const carregarRelatorioEstoque = async () => {
  loadingEstoque.value = true
  erro.value = ''
  try {
    const params = {}
    if (filtroLoja.value) params.loja_id = filtroLoja.value

    const data = await relatoriosApi.obterRelatorioEstoque(params)
    dadosEstoque.value = data
  } catch (e) {
    console.error('Erro ao carregar relatório de estoque:', e)
    erro.value = 'Falha ao carregar relatório de estoque.'
  } finally {
    loadingEstoque.value = false
  }
}

// Aplicar filtros gerais
const aplicarFiltros = () => {
  if (tabAtiva.value === 'vendas') {
    carregarRelatorioVendas()
  } else {
    carregarRelatorioEstoque()
  }
}

// Limpar filtros
const limparFiltros = () => {
  filtroLoja.value = null
  filtroDataInicio.value = ''
  filtroDataFim.value = ''
  filtroApenasAbaixoMinimo.value = false
  aplicarFiltros()
}

// Ver itens da venda
const abrirDetalhesVenda = venda => {
  vendaSelecionada.value = venda
  dialogDetalhesVenda.value = true
}

// Obter nome da loja atual para os cabeçalhos do PDF
const getNomeLojaAtual = () => {
  if (!isSuperAdmin.value) {
    return currentUser.value.loja_nome || 'Minha Loja'
  }
  if (!filtroLoja.value) {
    return 'Consolidado - 3 Lojas'
  }
  const l = lojas.value.find(item => item.id === filtroLoja.value)
  return l ? l.nome : `Loja #${filtroLoja.value}`
}

// Obter texto do período
const getTextoPeriodo = () => {
  if (filtroDataInicio.value && filtroDataFim.value) {
    return `${formatarDataSimples(filtroDataInicio.value)} até ${formatarDataSimples(filtroDataFim.value)}`
  }
  if (filtroDataInicio.value) {
    return `A partir de ${formatarDataSimples(filtroDataInicio.value)}`
  }
  if (filtroDataFim.value) {
    return `Até ${formatarDataSimples(filtroDataFim.value)}`
  }
  return 'Todo o histórico'
}

// Obter data AAAAMMDD para sufixo de arquivo
const getSufixoDataHoje = () => {
  const hoje = new Date()
  const yyyy = hoje.getFullYear()
  const mm = String(hoje.getMonth() + 1).padStart(2, '0')
  const dd = String(hoje.getDate()).padStart(2, '0')
  return `${yyyy}${mm}${dd}`
}

// Exportar PDF de Vendas
const exportarPdfVendas = () => {
  try {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
    const nomeLoja = getNomeLojaAtual()
    const periodo = getTextoPeriodo()
    const agora = new Date().toLocaleString('pt-BR')

    // Cabeçalho institucional
    doc.setFillColor(24, 103, 192) // Azul corporativo
    doc.rect(0, 0, 297, 24, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('REAL REVISION - RELATÓRIO DE VENDAS', 14, 11)

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(`Unidade: ${nomeLoja} | Período: ${periodo}`, 14, 18)
    doc.text(`Emissão: ${agora}`, 283, 18, { align: 'right' })

    // Preparar dados da tabela
    const rows = (dadosVendas.value.vendas || []).map((v, idx) => {
      const itensResumo = Array.isArray(v.itens)
        ? v.itens.map(i => `${i.quantidade}x ${i.item_nome || 'Peça'}`).join(', ')
        : '-'

      return [
        idx + 1,
        formatarData(v.data_venda),
        v.loja_nome || '-',
        v.vendedor_nome || '-',
        v.forma_pagamento || '-',
        itensResumo,
        formatarMoeda(v.valor_total),
      ]
    })

    autoTable(doc, {
      startY: 28,
      head: [['#', 'Data / Hora', 'Loja', 'Vendedor', 'Pagamento', 'Itens Vendidos', 'Valor Total']],
      body: rows,
      theme: 'grid',
      headStyles: {
        fillColor: [33, 43, 54],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 9,
      },
      styles: {
        fontSize: 8,
        cellPadding: 2.5,
      },
      columnStyles: {
        0: { cellWidth: 10, halign: 'center' },
        1: { cellWidth: 32 },
        2: { cellWidth: 35 },
        3: { cellWidth: 28 },
        4: { cellWidth: 26 },
        5: { cellWidth: 'auto' },
        6: { cellWidth: 30, halign: 'right', fontStyle: 'bold' },
      },
      didDrawPage: data => {
        // Rodapé de paginação
        doc.setFontSize(8)
        doc.setTextColor(120)
        doc.text(
          `Página ${doc.internal.getNumberOfPages()}`,
          283,
          205,
          { align: 'right' },
        )
      },
    })

    // Totais no final
    const finalY = doc.lastAutoTable.finalY + 8
    if (finalY < 195) {
      doc.setFillColor(245, 247, 250)
      doc.rect(14, finalY, 269, 14, 'F')
      doc.setDrawColor(200, 205, 215)
      doc.rect(14, finalY, 269, 14, 'S')

      doc.setFontSize(9)
      doc.setTextColor(40, 40, 40)
      doc.setFont('helvetica', 'bold')

      const t = dadosVendas.value.totais || {}
      doc.text(
        `Total de Vendas: ${t.quantidade_vendas || 0}   |   Peças Vendidas: ${t.itens_vendidos_total || 0} un   |   Ticket Médio: ${formatarMoeda(t.ticket_medio)}   |   Faturamento Total: ${formatarMoeda(t.valor_total)}`,
        18,
        finalY + 9,
      )
    }

    doc.save(`relatorio-vendas-${getSufixoDataHoje()}.pdf`)
  } catch (err) {
    console.error('Erro ao gerar PDF de vendas:', err)
    alert('Erro ao gerar arquivo PDF de vendas: ' + err.message)
  }
}

// Exportar PDF de Estoque
const exportarPdfEstoque = () => {
  try {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
    const nomeLoja = getNomeLojaAtual()
    const agora = new Date().toLocaleString('pt-BR')

    // Cabeçalho institucional
    doc.setFillColor(46, 125, 50) // Verde estoque
    doc.rect(0, 0, 297, 24, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('REAL REVISION - POSIÇÃO DE ESTOQUE', 14, 11)

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(`Unidade: ${nomeLoja} | Status: ${filtroApenasAbaixoMinimo.value ? 'Apenas Abaixo do Mínimo' : 'Todos os Itens'}`, 14, 18)
    doc.text(`Emissão: ${agora}`, 283, 18, { align: 'right' })

    const lista = itensEstoqueFiltrados.value || []

    const rows = lista.map((i, idx) => {
      return [
        idx + 1,
        i.codigo || '-',
        i.nome || '-',
        i.loja_nome || '-',
        i.grupo_nome || '-',
        `${Number(i.quantidade_disponivel || 0)} ${i.unidade_nome || 'un'}`,
        `${Number(i.quantidade_minima || 0)}`,
        formatarMoeda(i.custo_compra),
        formatarMoeda(i.valor_custo_total),
        i.abaixo_do_minimo ? 'ABAIXO DO MÍNIMO' : 'OK',
      ]
    })

    autoTable(doc, {
      startY: 28,
      head: [['#', 'Código', 'Descrição da Peça', 'Loja', 'Grupo', 'Disp.', 'Mín.', 'Custo Unit.', 'Custo Total', 'Situação']],
      body: rows,
      theme: 'grid',
      headStyles: {
        fillColor: [33, 43, 54],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 9,
      },
      styles: {
        fontSize: 8,
        cellPadding: 2.2,
      },
      columnStyles: {
        0: { cellWidth: 8, halign: 'center' },
        1: { cellWidth: 22 },
        2: { cellWidth: 'auto' },
        3: { cellWidth: 32 },
        4: { cellWidth: 26 },
        5: { cellWidth: 18, halign: 'right' },
        6: { cellWidth: 16, halign: 'right' },
        7: { cellWidth: 24, halign: 'right' },
        8: { cellWidth: 26, halign: 'right', fontStyle: 'bold' },
        9: { cellWidth: 30, halign: 'center' },
      },
      didParseCell: data => {
        // Destaque em vermelho para itens abaixo do mínimo
        if (data.column.index === 9 && data.cell.text[0] === 'ABAIXO DO MÍNIMO') {
          data.cell.styles.textColor = [198, 40, 40]
          data.cell.styles.fontStyle = 'bold'
        }
      },
      didDrawPage: data => {
        doc.setFontSize(8)
        doc.setTextColor(120)
        doc.text(
          `Página ${doc.internal.getNumberOfPages()}`,
          283,
          205,
          { align: 'right' },
        )
      },
    })

    const finalY = doc.lastAutoTable.finalY + 8
    if (finalY < 195) {
      doc.setFillColor(245, 247, 250)
      doc.rect(14, finalY, 269, 14, 'F')
      doc.setDrawColor(200, 205, 215)
      doc.rect(14, finalY, 269, 14, 'S')

      doc.setFontSize(9)
      doc.setTextColor(40, 40, 40)
      doc.setFont('helvetica', 'bold')

      const t = dadosEstoque.value.totais || {}
      doc.text(
        `Itens Listados: ${lista.length}   |   Unidades em Estoque: ${t.total_unidades || 0}   |   Custo Total em Estoque: ${formatarMoeda(t.valor_custo_total)}   |   Itens Críticos: ${t.total_itens_abaixo_minimo || 0}`,
        18,
        finalY + 9,
      )
    }

    doc.save(`relatorio-estoque-${getSufixoDataHoje()}.pdf`)
  } catch (err) {
    console.error('Erro ao gerar PDF de estoque:', err)
    alert('Erro ao gerar arquivo PDF de estoque: ' + err.message)
  }
}

// Watcher de abas para carregar dados automaticamente ao trocar de aba
watch(tabAtiva, novaTab => {
  if (novaTab === 'vendas') {
    carregarRelatorioVendas()
  } else if (novaTab === 'estoque') {
    carregarRelatorioEstoque()
  }
})

onMounted(() => {
  carregarLojas()
  carregarRelatorioVendas()
})
</script>

<template>
  <div class="relatorios-container">
    <!-- Título e Ações Superiores -->
    <VRow class="mb-4 align-center">
      <VCol cols="12" md="6">
        <h2 class="text-h4 font-weight-bold">
          Relatórios Gerenciais
        </h2>
        <p class="text-subtitle-1 text-medium-emphasis mb-0">
          Análise de desempenho de vendas, estoque e exportação documental em PDF
        </p>
      </VCol>
      <VCol cols="12" md="6" class="text-md-right">
        <VBtn
          v-if="tabAtiva === 'vendas'"
          color="error"
          prepend-icon="mdi-file-pdf-box"
          size="large"
          class="w-100 w-md-auto"
          :disabled="loadingVendas || dadosVendas.vendas.length === 0"
          @click="exportarPdfVendas"
        >
          Exportar PDF Vendas
        </VBtn>
        <VBtn
          v-if="tabAtiva === 'estoque'"
          color="success"
          prepend-icon="mdi-file-pdf-box"
          size="large"
          class="w-100 w-md-auto"
          :disabled="loadingEstoque || dadosEstoque.itens.length === 0"
          @click="exportarPdfEstoque"
        >
          Exportar PDF Estoque
        </VBtn>
      </VCol>
    </VRow>

    <!-- Card de Filtros -->
    <VCard class="mb-6 elevation-1">
      <VCardTitle class="py-3 px-4 d-flex align-center">
        <VIcon icon="mdi-filter-variant" class="me-2 text-primary" />
        <span class="text-subtitle-1 font-weight-bold">Filtros de Pesquisa</span>
      </VCardTitle>
      <VDivider />
      <VCardText class="pt-4 pb-2">
        <VRow dense>
          <!-- Filtro de Loja (Apenas Super Admin) -->
          <VCol v-if="isSuperAdmin" cols="12" sm="6" md="4">
            <VSelect
              v-model="filtroLoja"
              :items="[
                { id: null, nome: 'Consolidado - Todas as Lojas' },
                ...lojas
              ]"
              item-title="nome"
              item-value="id"
              label="Filtrar por Loja"
              density="compact"
              variant="outlined"
              prepend-inner-icon="mdi-store-outline"
            />
          </VCol>

          <!-- Filtro Data Início -->
          <VCol cols="12" sm="6" md="3" v-if="tabAtiva === 'vendas'">
            <VTextField
              v-model="filtroDataInicio"
              type="date"
              label="Data Início"
              density="compact"
              variant="outlined"
              prepend-inner-icon="mdi-calendar"
            />
          </VCol>

          <!-- Filtro Data Fim -->
          <VCol cols="12" sm="6" md="3" v-if="tabAtiva === 'vendas'">
            <VTextField
              v-model="filtroDataFim"
              type="date"
              label="Data Fim"
              density="compact"
              variant="outlined"
              prepend-inner-icon="mdi-calendar"
            />
          </VCol>

          <!-- Filtro rápido de estoque -->
          <VCol cols="12" sm="6" md="4" v-if="tabAtiva === 'estoque'" class="d-flex align-center">
            <VSwitch
              v-model="filtroApenasAbaixoMinimo"
              label="Apenas peças abaixo do estoque mínimo"
              color="error"
              density="compact"
              hide-details
            />
          </VCol>

          <!-- Botões de Ação -->
          <VCol cols="12" sm="6" :md="tabAtiva === 'vendas' ? 2 : 4" class="d-flex align-center justify-end">
            <VBtn
              color="primary"
              variant="elevated"
              density="default"
              prepend-icon="mdi-magnify"
              class="me-2"
              @click="aplicarFiltros"
            >
              Filtrar
            </VBtn>
            <VBtn
              variant="outlined"
              density="default"
              icon="mdi-refresh"
              title="Limpar Filtros"
              @click="limparFiltros"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <!-- Alerta de Erro se houver -->
    <VAlert
      v-if="erro"
      type="error"
      variant="tonal"
      class="mb-4"
      closable
      @click:close="erro = ''"
    >
      {{ erro }}
    </VAlert>

    <!-- Abas de Navegação -->
    <VCard class="elevation-1">
      <VTabs
        v-model="tabAtiva"
        bg-color="transparent"
        color="primary"
        grow
      >
        <VTab value="vendas">
          <VIcon icon="mdi-chart-bar" class="me-2" />
          Relatório de Vendas
        </VTab>
        <VTab value="estoque">
          <VIcon icon="mdi-package-variant-closed" class="me-2" />
          Relatório de Estoque
        </VTab>
      </VTabs>
      <VDivider />

      <VWindow v-model="tabAtiva">
        <!-- ================= ABA 1: VENDAS ================= -->
        <VWindowItem value="vendas">
          <VCardText class="pa-4">
            <!-- Cards de Resumo de Vendas -->
            <VRow class="mb-4">
              <VCol cols="12" sm="6" md="3">
                <VCard variant="tonal" color="primary" class="pa-4 text-center">
                  <div class="text-caption text-uppercase font-weight-medium">Vendas Realizadas</div>
                  <div class="text-h4 font-weight-bold my-1">
                    {{ dadosVendas.totais.quantidade_vendas }}
                  </div>
                  <div class="text-caption text-medium-emphasis">
                    No período selecionado
                  </div>
                </VCard>
              </VCol>

              <VCol cols="12" sm="6" md="3">
                <VCard variant="tonal" color="success" class="pa-4 text-center">
                  <div class="text-caption text-uppercase font-weight-medium">Faturamento Total</div>
                  <div class="text-h4 font-weight-bold my-1 text-success">
                    {{ formatarMoeda(dadosVendas.totais.valor_total) }}
                  </div>
                  <div class="text-caption text-medium-emphasis">
                    Soma das vendas
                  </div>
                </VCard>
              </VCol>

              <VCol cols="12" sm="6" md="3">
                <VCard variant="tonal" color="info" class="pa-4 text-center">
                  <div class="text-caption text-uppercase font-weight-medium">Ticket Médio</div>
                  <div class="text-h4 font-weight-bold my-1 text-info">
                    {{ formatarMoeda(dadosVendas.totais.ticket_medio) }}
                  </div>
                  <div class="text-caption text-medium-emphasis">
                    Média por venda
                  </div>
                </VCard>
              </VCol>

              <VCol cols="12" sm="6" md="3">
                <VCard variant="tonal" color="warning" class="pa-4 text-center">
                  <div class="text-caption text-uppercase font-weight-medium">Peças Vendidas</div>
                  <div class="text-h4 font-weight-bold my-1 text-warning">
                    {{ dadosVendas.totais.itens_vendidos_total }} un
                  </div>
                  <div class="text-caption text-medium-emphasis">
                    Unidades entregues
                  </div>
                </VCard>
              </VCol>
            </VRow>

            <!-- Breakdown por Loja (Se Super Admin e sem filtro específico de loja) -->
            <div v-if="isSuperAdmin && !filtroLoja && dadosVendas.por_loja && dadosVendas.por_loja.length > 0" class="mb-6">
              <h3 class="text-subtitle-1 font-weight-bold mb-2 d-flex align-center">
                <VIcon icon="mdi-store" class="me-2 text-primary" size="20" />
                Desempenho por Loja (Consolidado)
              </h3>
              <div class="table-responsive">
                <VTable density="compact" class="border rounded">
                  <thead>
                    <tr class="bg-surface-variant">
                      <th class="font-weight-bold">Loja</th>
                      <th class="font-weight-bold text-center">Vendas</th>
                      <th class="font-weight-bold text-center">Peças</th>
                      <th class="font-weight-bold text-end">Ticket Médio</th>
                      <th class="font-weight-bold text-end">Faturamento Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="l in dadosVendas.por_loja" :key="l.loja_id">
                      <td class="font-weight-medium">{{ l.loja_nome }}</td>
                      <td class="text-center">{{ l.quantidade_vendas }}</td>
                      <td class="text-center">{{ l.itens_vendidos }} un</td>
                      <td class="text-end">{{ formatarMoeda(l.ticket_medio) }}</td>
                      <td class="text-end font-weight-bold text-success">{{ formatarMoeda(l.valor_total) }}</td>
                    </tr>
                  </tbody>
                </VTable>
              </div>
            </div>

            <!-- Tabela Detalhada de Vendas -->
            <div class="d-flex justify-space-between align-center mb-2">
              <h3 class="text-subtitle-1 font-weight-bold">
                Lista de Vendas do Período
              </h3>
              <span class="text-caption text-medium-emphasis">
                {{ dadosVendas.vendas.length }} registro(s) encontrado(s)
              </span>
            </div>

            <div v-if="loadingVendas" class="py-12 text-center">
              <VProgressCircular indeterminate color="primary" size="48" />
              <div class="mt-3 text-body-2 text-medium-emphasis">Carregando relatório de vendas...</div>
            </div>

            <div v-else-if="dadosVendas.vendas.length === 0" class="py-10 text-center border rounded">
              <VIcon icon="mdi-cart-off" size="48" class="text-medium-emphasis mb-2" />
              <div class="text-body-1 font-weight-medium">Nenhuma venda encontrada para os filtros selecionados.</div>
            </div>

            <div v-else class="table-responsive">
              <VTable density="comfortable" hover class="border rounded">
                <thead>
                  <tr class="bg-surface-variant">
                    <th class="font-weight-bold"># ID</th>
                    <th class="font-weight-bold">Data / Hora</th>
                    <th v-if="isSuperAdmin" class="font-weight-bold">Loja</th>
                    <th class="font-weight-bold">Vendedor</th>
                    <th class="font-weight-bold">Pagamento</th>
                    <th class="font-weight-bold text-center">Qtd Itens</th>
                    <th class="font-weight-bold text-end">Valor Total</th>
                    <th class="font-weight-bold text-center">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="v in dadosVendas.vendas" :key="v.id">
                    <td class="text-caption font-weight-bold">#{{ v.id }}</td>
                    <td>{{ formatarData(v.data_venda) }}</td>
                    <td v-if="isSuperAdmin">
                      <VChip size="small" variant="tonal" color="primary">
                        {{ v.loja_nome }}
                      </VChip>
                    </td>
                    <td>{{ v.vendedor_nome || '-' }}</td>
                    <td>
                      <VChip size="small" variant="outlined">
                        {{ v.forma_pagamento }}
                        {{ v.parcelas > 1 ? `(${v.parcelas}x)` : '' }}
                      </VChip>
                    </td>
                    <td class="text-center">
                      {{ (v.itens || []).length }} item(ns)
                    </td>
                    <td class="text-end font-weight-bold text-success">
                      {{ formatarMoeda(v.valor_total) }}
                    </td>
                    <td class="text-center">
                      <VBtn
                        size="x-small"
                        variant="tonal"
                        color="primary"
                        icon="mdi-eye"
                        title="Ver itens da venda"
                        @click="abrirDetalhesVenda(v)"
                      />
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </div>
          </VCardText>
        </VWindowItem>

        <!-- ================= ABA 2: ESTOQUE ================= -->
        <VWindowItem value="estoque">
          <VCardText class="pa-4">
            <!-- Cards de Resumo do Estoque -->
            <VRow class="mb-4">
              <VCol cols="12" sm="6" md="3">
                <VCard variant="tonal" color="primary" class="pa-4 text-center">
                  <div class="text-caption text-uppercase font-weight-medium">Itens Cadastrados</div>
                  <div class="text-h4 font-weight-bold my-1">
                    {{ dadosEstoque.totais.total_itens }}
                  </div>
                  <div class="text-caption text-medium-emphasis">
                    Produtos distintos
                  </div>
                </VCard>
              </VCol>

              <VCol cols="12" sm="6" md="3">
                <VCard variant="tonal" color="info" class="pa-4 text-center">
                  <div class="text-caption text-uppercase font-weight-medium">Unidades Físicas</div>
                  <div class="text-h4 font-weight-bold my-1 text-info">
                    {{ dadosEstoque.totais.total_unidades }} un
                  </div>
                  <div class="text-caption text-medium-emphasis">
                    Saldo total disponível
                  </div>
                </VCard>
              </VCol>

              <VCol cols="12" sm="6" md="3">
                <VCard variant="tonal" color="success" class="pa-4 text-center">
                  <div class="text-caption text-uppercase font-weight-medium">Custo Total em Estoque</div>
                  <div class="text-h4 font-weight-bold my-1 text-success">
                    {{ formatarMoeda(dadosEstoque.totais.valor_custo_total) }}
                  </div>
                  <div class="text-caption text-medium-emphasis">
                    Valor total imobilizado
                  </div>
                </VCard>
              </VCol>

              <VCol cols="12" sm="6" md="3">
                <VCard
                  variant="tonal"
                  :color="dadosEstoque.totais.total_itens_abaixo_minimo > 0 ? 'error' : 'secondary'"
                  class="pa-4 text-center"
                >
                  <div class="text-caption text-uppercase font-weight-medium">Abaixo do Mínimo</div>
                  <div class="text-h4 font-weight-bold my-1 text-error">
                    {{ dadosEstoque.totais.total_itens_abaixo_minimo }}
                  </div>
                  <div class="text-caption text-medium-emphasis">
                    Necessitam reposição
                  </div>
                </VCard>
              </VCol>
            </VRow>

            <!-- Breakdown por Loja (Se Super Admin e sem filtro específico) -->
            <div v-if="isSuperAdmin && !filtroLoja && dadosEstoque.por_loja && dadosEstoque.por_loja.length > 0" class="mb-6">
              <h3 class="text-subtitle-1 font-weight-bold mb-2 d-flex align-center">
                <VIcon icon="mdi-store" class="me-2 text-primary" size="20" />
                Posição Consolidada por Loja
              </h3>
              <div class="table-responsive">
                <VTable density="compact" class="border rounded">
                  <thead>
                    <tr class="bg-surface-variant">
                      <th class="font-weight-bold">Loja</th>
                      <th class="font-weight-bold text-center">Itens</th>
                      <th class="font-weight-bold text-center">Unidades</th>
                      <th class="font-weight-bold text-center">Abaixo do Mínimo</th>
                      <th class="font-weight-bold text-end">Custo Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="l in dadosEstoque.por_loja" :key="l.loja_id">
                      <td class="font-weight-medium">{{ l.loja_nome }}</td>
                      <td class="text-center">{{ l.total_itens }}</td>
                      <td class="text-center">{{ l.total_unidades }} un</td>
                      <td class="text-center">
                        <VChip
                          v-if="l.total_itens_abaixo_minimo > 0"
                          size="x-small"
                          color="error"
                        >
                          {{ l.total_itens_abaixo_minimo }} alerta(s)
                        </VChip>
                        <span v-else class="text-caption text-medium-emphasis">0</span>
                      </td>
                      <td class="text-end font-weight-bold text-success">{{ formatarMoeda(l.valor_custo_total) }}</td>
                    </tr>
                  </tbody>
                </VTable>
              </div>
            </div>

            <!-- Tabela Detalhada de Estoque -->
            <div class="d-flex justify-space-between align-center mb-2">
              <h3 class="text-subtitle-1 font-weight-bold">
                Itens em Estoque
              </h3>
              <span class="text-caption text-medium-emphasis">
                {{ itensEstoqueFiltrados.length }} item(ns) exibido(s)
              </span>
            </div>

            <div v-if="loadingEstoque" class="py-12 text-center">
              <VProgressCircular indeterminate color="primary" size="48" />
              <div class="mt-3 text-body-2 text-medium-emphasis">Carregando relatório de estoque...</div>
            </div>

            <div v-else-if="itensEstoqueFiltrados.length === 0" class="py-10 text-center border rounded">
              <VIcon icon="mdi-package-variant-closed" size="48" class="text-medium-emphasis mb-2" />
              <div class="text-body-1 font-weight-medium">Nenhum item encontrado no estoque para os critérios selecionados.</div>
            </div>

            <div v-else class="table-responsive">
              <VTable density="comfortable" hover class="border rounded">
                <thead>
                  <tr class="bg-surface-variant">
                    <th class="font-weight-bold">Código</th>
                    <th class="font-weight-bold">Descrição da Peça</th>
                    <th v-if="isSuperAdmin" class="font-weight-bold">Loja</th>
                    <th class="font-weight-bold">Grupo</th>
                    <th class="font-weight-bold text-end">Qtd Disp.</th>
                    <th class="font-weight-bold text-end">Mínimo</th>
                    <th class="font-weight-bold text-end">Custo Unit.</th>
                    <th class="font-weight-bold text-end">Custo Total</th>
                    <th class="font-weight-bold text-center">Situação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in itensEstoqueFiltrados" :key="item.id">
                    <td class="font-weight-medium text-caption">{{ item.codigo }}</td>
                    <td>{{ item.nome }}</td>
                    <td v-if="isSuperAdmin">
                      <VChip size="small" variant="tonal" color="primary">
                        {{ item.loja_nome }}
                      </VChip>
                    </td>
                    <td>{{ item.grupo_nome || '-' }}</td>
                    <td class="text-end font-weight-bold">
                      {{ Number(item.quantidade_disponivel) }} {{ item.unidade_nome || 'un' }}
                    </td>
                    <td class="text-end text-medium-emphasis">
                      {{ Number(item.quantidade_minima) }}
                    </td>
                    <td class="text-end">{{ formatarMoeda(item.custo_compra) }}</td>
                    <td class="text-end font-weight-bold text-success">{{ formatarMoeda(item.valor_custo_total) }}</td>
                    <td class="text-center">
                      <VChip
                        v-if="item.abaixo_do_minimo"
                        color="error"
                        size="small"
                        variant="flat"
                      >
                        Abaixo do Mínimo
                      </VChip>
                      <VChip
                        v-else
                        color="success"
                        size="small"
                        variant="tonal"
                      >
                        Normal
                      </VChip>
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </div>
          </VCardText>
        </VWindowItem>
      </VWindow>
    </VCard>

    <!-- Dialog de Detalhes dos Itens da Venda -->
    <VDialog v-model="dialogDetalhesVenda" max-width="650px">
      <VCard v-if="vendaSelecionada">
        <VCardTitle class="pa-4 d-flex justify-space-between align-center bg-primary text-white">
          <span>Detalhes da Venda #{{ vendaSelecionada.id }}</span>
          <VBtn
            variant="text"
            icon="mdi-close"
            density="compact"
            color="white"
            @click="dialogDetalhesVenda = false"
          />
        </VCardTitle>

        <VCardText class="pa-4">
          <VRow dense class="mb-3">
            <VCol cols="12" sm="6">
              <div class="text-caption text-medium-emphasis">Data e Hora</div>
              <div class="text-body-2 font-weight-medium">{{ formatarData(vendaSelecionada.data_venda) }}</div>
            </VCol>
            <VCol cols="12" sm="6">
              <div class="text-caption text-medium-emphasis">Loja</div>
              <div class="text-body-2 font-weight-medium">{{ vendaSelecionada.loja_nome }}</div>
            </VCol>
            <VCol cols="12" sm="6">
              <div class="text-caption text-medium-emphasis">Vendedor</div>
              <div class="text-body-2 font-weight-medium">{{ vendaSelecionada.vendedor_nome || '-' }}</div>
            </VCol>
            <VCol cols="12" sm="6">
              <div class="text-caption text-medium-emphasis">Forma de Pagamento</div>
              <div class="text-body-2 font-weight-medium">
                {{ vendaSelecionada.forma_pagamento }}
                {{ vendaSelecionada.parcelas > 1 ? `(${vendaSelecionada.parcelas}x)` : '' }}
              </div>
            </VCol>
            <VCol v-if="vendaSelecionada.observacoes" cols="12">
              <div class="text-caption text-medium-emphasis">Observações</div>
              <div class="text-body-2 font-weight-medium">{{ vendaSelecionada.observacoes }}</div>
            </VCol>
          </VRow>

          <VDivider class="my-3" />

          <h4 class="text-subtitle-2 font-weight-bold mb-2">Itens Vendidos</h4>
          <div class="table-responsive">
            <VTable density="compact" class="border rounded">
              <thead>
                <tr class="bg-surface-variant">
                  <th class="font-weight-bold">Código</th>
                  <th class="font-weight-bold">Peça / Item</th>
                  <th class="font-weight-bold text-center">Qtd</th>
                  <th class="font-weight-bold text-end">Preço Unit.</th>
                  <th class="font-weight-bold text-end">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="it in (vendaSelecionada.itens || [])" :key="it.id || it.item_id">
                  <td class="text-caption">{{ it.item_codigo || '-' }}</td>
                  <td class="font-weight-medium">{{ it.item_nome || `Item #${it.item_id}` }}</td>
                  <td class="text-center">{{ it.quantidade }}</td>
                  <td class="text-end">{{ formatarMoeda(it.preco_unitario) }}</td>
                  <td class="text-end font-weight-bold text-success">{{ formatarMoeda(it.valor_total_item) }}</td>
                </tr>
              </tbody>
            </VTable>
          </div>

          <div class="text-end mt-4">
            <span class="text-subtitle-1 font-weight-bold me-2">Valor Total da Venda:</span>
            <span class="text-h5 font-weight-bold text-success">{{ formatarMoeda(vendaSelecionada.valor_total) }}</span>
          </div>
        </VCardText>

        <VCardActions class="pa-4 justify-end">
          <VBtn color="primary" variant="tonal" @click="dialogDetalhesVenda = false">
            Fechar
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>

<style scoped>
.table-responsive {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
