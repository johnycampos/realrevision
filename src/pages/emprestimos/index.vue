<route lang="yaml">
meta:
  menuKey: emprestimos
</route>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import emprestimosApi from '@/server/Emprestimos'

// Dados do Usuário Logado
const currentUser = computed(() => {
  try {
    return JSON.parse(localStorage.getItem('userData') || '{}')
  } catch (e) {
    return {}
  }
})

const role = computed(() => currentUser.value.role || 'funcionario')
const isSuperAdmin = computed(() => role.value === 'super_admin')
const isAdminLoja = computed(() => role.value === 'admin_loja')
const isEstoquista = computed(() => currentUser.value.estoquista === true)
// Gerente da loja, super_admin, ou funcionário com a flag "estoquista" podem aprovar/rejeitar/pagar empréstimos
const isAdminOrSuper = computed(() => isSuperAdmin.value || isAdminLoja.value || isEstoquista.value)

// Estado da Tela
const activeTab = ref('estoque-outras-lojas')
const loading = ref(false)
const mensagemSucesso = ref('')
const mensagemErro = ref('')

// Paginação genérica (client-side) reutilizada pelas 4 abas
const ITENS_POR_PAGINA = 15
const paginaEstoqueOutrasLojas = ref(1)
const paginaMeusPedidos = ref(1)
const paginaPendentesAprovacao = ref(1)
const paginaTodosEmprestimos = ref(1)

const paginar = (lista, pagina) => {
  const start = (pagina - 1) * ITENS_POR_PAGINA
  return lista.slice(start, start + ITENS_POR_PAGINA)
}

const totalPaginas = lista => Math.max(1, Math.ceil(lista.length / ITENS_POR_PAGINA))

// ==========================================
// ABA 1: Estoque de Outras Lojas
// ==========================================
const buscaOutrasLojas = ref('')
const itensOutrasLojas = ref([])
const dialogSolicitar = ref(false)
const itemSelecionadoParaSolicitar = ref(null)
const quantidadeSolicitada = ref(1)
const observacoesSolicitacao = ref('')
const enviandoSolicitacao = ref(false)

const itensOutrasLojasPaginados = computed(() => paginar(itensOutrasLojas.value, paginaEstoqueOutrasLojas.value))

const carregarEstoqueOutrasLojas = async () => {
  try {
    loading.value = true
    paginaEstoqueOutrasLojas.value = 1
    const response = await emprestimosApi.buscarEstoqueOutrasLojas(buscaOutrasLojas.value)
    itensOutrasLojas.value = response.data || []
  } catch (err) {
    mensagemErro.value = err.response?.data?.error || 'Erro ao consultar estoque de outras lojas'
  } finally {
    loading.value = false
  }
}

const abrirModalSolicitar = item => {
  itemSelecionadoParaSolicitar.value = item
  quantidadeSolicitada.value = 1
  observacoesSolicitacao.value = ''
  mensagemErro.value = ''
  mensagemSucesso.value = ''
  dialogSolicitar.value = true
}

const confirmarSolicitacao = async () => {
  if (!itemSelecionadoParaSolicitar.value) return

  const qtd = Number(quantidadeSolicitada.value)
  if (isNaN(qtd) || qtd <= 0) {
    mensagemErro.value = 'Informe uma quantidade válida maior que zero'
    return
  }

  if (qtd > Number(itemSelecionadoParaSolicitar.value.quantidade_disponivel)) {
    mensagemErro.value = `Quantidade excede o estoque disponível (${itemSelecionadoParaSolicitar.value.quantidade_disponivel})`
    return
  }

  try {
    enviandoSolicitacao.value = true
    mensagemErro.value = ''
    await emprestimosApi.solicitar({
      item_origem_id: itemSelecionadoParaSolicitar.value.id,
      quantidade: qtd,
      observacoes: observacoesSolicitacao.value || null,
    })

    mensagemSucesso.value = 'Solicitação de empréstimo enviada com sucesso!'
    dialogSolicitar.value = false
    carregarEstoqueOutrasLojas()
    carregarMeusPedidos()
  } catch (err) {
    mensagemErro.value = err.response?.data?.error || 'Erro ao enviar solicitação'
  } finally {
    enviandoSolicitacao.value = false
  }
}

const isAdminLojaOrEstoquista = computed(() => isAdminLoja.value || isEstoquista.value)
// ==========================================
// ABA 2: Meus Pedidos
// ==========================================
const meusPedidos = ref([])
const meusPedidosPaginados = computed(() => paginar(meusPedidos.value, paginaMeusPedidos.value))
const carregarMeusPedidos = async () => {
  try {
    loading.value = true
    paginaMeusPedidos.value = 1
    const params = { como_destino: isAdminLojaOrEstoquista.value ? 'true' : undefined }
    const response = await emprestimosApi.listar(params)
    meusPedidos.value = response.data || []
  } catch (err) {
    console.error('Erro ao carregar pedidos:', err)
  } finally {
    loading.value = false
  }
}

// ==========================================
// ABA 3: Aprovações Pendentes (Admin/Super)
// ==========================================
const pendentesAprovacao = ref([])
const pendentesAprovacaoPaginados = computed(() => paginar(pendentesAprovacao.value, paginaPendentesAprovacao.value))
const dialogAprovar = ref(false)
const dialogRejeitar = ref(false)
const itemEmAprovacao = ref(null)
const motivoRejeicao = ref('')
const processandoAcao = ref(false)

const carregarPendentesAprovacao = async () => {
  if (!isAdminOrSuper.value) return
  try {
    loading.value = true
    paginaPendentesAprovacao.value = 1
    const params = {
      status: 'solicitado',
      como_origem: isAdminLojaOrEstoquista.value ? 'true' : undefined,
    }
    const response = await emprestimosApi.listar(params)
    pendentesAprovacao.value = response.data || []
  } catch (err) {
    console.error('Erro ao carregar pendentes de aprovação:', err)
  } finally {
    loading.value = false
  }
}

const abrirConfirmarAprovacao = pedido => {
  itemEmAprovacao.value = pedido
  mensagemErro.value = ''
  mensagemSucesso.value = ''
  dialogAprovar.value = true
}

const confirmarAprovacao = async () => {
  if (!itemEmAprovacao.value) return
  try {
    processandoAcao.value = true
    await emprestimosApi.aprovar(itemEmAprovacao.value.id)
    mensagemSucesso.value = `Empréstimo #${itemEmAprovacao.value.id} aprovado com sucesso! Peça transferida.`
    dialogAprovar.value = false
    carregarPendentesAprovacao()
    carregarTodosEmprestimos()
  } catch (err) {
    mensagemErro.value = err.response?.data?.error || 'Erro ao aprovar empréstimo'
  } finally {
    processandoAcao.value = false
  }
}

const abrirModalRejeicao = pedido => {
  itemEmAprovacao.value = pedido
  motivoRejeicao.value = ''
  mensagemErro.value = ''
  mensagemSucesso.value = ''
  dialogRejeitar.value = true
}

const confirmarRejeicao = async () => {
  if (!itemEmAprovacao.value) return
  try {
    processandoAcao.value = true
    await emprestimosApi.rejeitar(itemEmAprovacao.value.id, motivoRejeicao.value)
    mensagemSucesso.value = `Empréstimo #${itemEmAprovacao.value.id} rejeitado com sucesso.`
    dialogRejeitar.value = false
    carregarPendentesAprovacao()
    carregarTodosEmprestimos()
  } catch (err) {
    mensagemErro.value = err.response?.data?.error || 'Erro ao rejeitar empréstimo'
  } finally {
    processandoAcao.value = false
  }
}

// ==========================================
// ABA 4: Todos os Empréstimos & Pagamento (Admin/Super)
// ==========================================
const todosEmprestimos = ref([])
const todosEmprestimosPaginados = computed(() => paginar(todosEmprestimos.value, paginaTodosEmprestimos.value))
const filtroStatus = ref('')
const dialogPagamento = ref(false)
const itemEmPagamento = ref(null)
const formaPagamentoSelecionada = ref('PIX')
const opcoesFormasPagamento = ['PIX', 'Dinheiro', 'Transferência', 'Boleto', 'Desconto Futuro', 'Outro']
const registrandoPagamento = ref(false)

const carregarTodosEmprestimos = async () => {
  if (!isAdminOrSuper.value) return
  try {
    loading.value = true
    paginaTodosEmprestimos.value = 1
    const params = filtroStatus.value ? { status: filtroStatus.value } : {}
    const response = await emprestimosApi.listar(params)
    todosEmprestimos.value = response.data || []
  } catch (err) {
    console.error('Erro ao listar todos empréstimos:', err)
  } finally {
    loading.value = false
  }
}

const abrirModalPagamento = item => {
  itemEmPagamento.value = item
  formaPagamentoSelecionada.value = 'PIX'
  mensagemErro.value = ''
  mensagemSucesso.value = ''
  dialogPagamento.value = true
}

const confirmarRegistroPagamento = async () => {
  if (!itemEmPagamento.value) return
  if (!formaPagamentoSelecionada.value) {
    mensagemErro.value = 'Selecione a forma de pagamento'
    return
  }

  try {
    registrandoPagamento.value = true
    await emprestimosApi.registrarPagamento(itemEmPagamento.value.id, formaPagamentoSelecionada.value)
    mensagemSucesso.value = `Pagamento do empréstimo #${itemEmPagamento.value.id} registrado com sucesso!`
    dialogPagamento.value = false
    carregarTodosEmprestimos()
    carregarMeusPedidos()
  } catch (err) {
    mensagemErro.value = err.response?.data?.error || 'Erro ao registrar pagamento'
  } finally {
    registrandoPagamento.value = false
  }
}

// Formatadores visuais
const getStatusColor = status => {
  switch (status) {
    case 'solicitado':
      return 'warning'
    case 'aprovado':
      return 'success'
    case 'rejeitado':
      return 'error'
    default:
      return 'default'
  }
}

const getStatusLabel = status => {
  switch (status) {
    case 'solicitado':
      return 'Solicitado'
    case 'aprovado':
      return 'Aprovado'
    case 'rejeitado':
      return 'Rejeitado'
    default:
      return status
  }
}

const formatarData = dataStr => {
  if (!dataStr) return '-'
  try {
    const d = new Date(dataStr)
    return d.toLocaleString('pt-BR')
  } catch (e) {
    return dataStr
  }
}

const formatarValor = val => {
  if (val === null || val === undefined || val === '') return '-'
  return Number(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

// Watch de abas para carregamento sob demanda
watch(activeTab, novaAba => {
  mensagemErro.value = ''
  mensagemSucesso.value = ''
  if (novaAba === 'estoque-outras-lojas') {
    carregarEstoqueOutrasLojas()
  } else if (novaAba === 'meus-pedidos') {
    carregarMeusPedidos()
  } else if (novaAba === 'aprovacoes-pendentes') {
    carregarPendentesAprovacao()
  } else if (novaAba === 'todos-emprestimos') {
    carregarTodosEmprestimos()
  }
})

onMounted(() => {
  carregarEstoqueOutrasLojas()
})
</script>

<template>
  <div>
    <!-- Cabeçalho -->
    <VCard class="mb-6">
      <VCardItem>
        <template #prepend>
          <VAvatar
            color="primary"
            variant="tonal"
            class="me-3"
            size="48"
          >
            <VIcon
              icon="mdi-swap-horizontal"
              size="28"
            />
          </VAvatar>
        </template>
        <VCardTitle class="text-h5 font-weight-bold">
          Empréstimo de Peças entre Lojas
        </VCardTitle>
        <VCardSubtitle>
          Consulte o estoque das outras filiais, solicite peças por empréstimo e gerencie aprovações e pagamentos.
        </VCardSubtitle>
      </VCardItem>
    </VCard>

    <!-- Alertas Globais -->
    <VAlert
      v-if="mensagemSucesso"
      type="success"
      variant="tonal"
      closable
      class="mb-4"
      @click:close="mensagemSucesso = ''"
    >
      {{ mensagemSucesso }}
    </VAlert>

    <VAlert
      v-if="mensagemErro"
      type="error"
      variant="tonal"
      closable
      class="mb-4"
      @click:close="mensagemErro = ''"
    >
      {{ mensagemErro }}
    </VAlert>

    <!-- Abas de Navegação -->
    <VCard>
      <VTabs
        v-model="activeTab"
        grow
        stacked
      >
        <VTab value="estoque-outras-lojas">
          <VIcon
            icon="mdi-magnify"
            class="mb-1"
          />
          Estoque de Outras Lojas
        </VTab>

        <VTab value="meus-pedidos">
          <VIcon
            icon="mdi-format-list-bulleted"
            class="mb-1"
          />
          Meus Pedidos
        </VTab>

        <VTab
          v-if="isAdminOrSuper"
          value="aprovacoes-pendentes"
        >
          <VIcon
            icon="mdi-clock-check-outline"
            class="mb-1"
          />
          Aprovações Pendentes
        </VTab>

        <VTab
          v-if="isAdminOrSuper"
          value="todos-emprestimos"
        >
          <VIcon
            icon="mdi-file-document-multiple-outline"
            class="mb-1"
          />
          Todos os Empréstimos
        </VTab>
      </VTabs>

      <VDivider />

      <VCardText>
        <VWindow v-model="activeTab">
          <!-- ========================================== -->
          <!-- ABA 1: Estoque de Outras Lojas             -->
          <!-- ========================================== -->
          <VWindowItem value="estoque-outras-lojas">
            <VRow class="mb-4 align-center">
              <VCol
                cols="12"
                md="8"
              >
                <VTextField
                  v-model="buscaOutrasLojas"
                  density="compact"
                  variant="outlined"
                  placeholder="Pesquisar por código, nome da peça ou grupo..."
                  prepend-inner-icon="mdi-magnify"
                  clearable
                  @keyup.enter="carregarEstoqueOutrasLojas"
                  @click:clear="carregarEstoqueOutrasLojas"
                />
              </VCol>
              <VCol
                cols="12"
                md="4"
                class="d-flex justify-end gap-2"
              >
                <VBtn
                  color="primary"
                  prepend-icon="mdi-magnify"
                  :loading="loading"
                  @click="carregarEstoqueOutrasLojas"
                >
                  Buscar
                </VBtn>
              </VCol>
            </VRow>

            <div class="table-responsive">
              <VTable class="text-no-wrap">
                <thead>
                  <tr>
                    <th>CÓDIGO</th>
                    <th>NOME DA PEÇA</th>
                    <th>LOJA DETENTORA</th>
                    <th>QUANTIDADE DISPONÍVEL</th>
                    <th>PREÇO CONSUMIDOR</th>
                    <th class="text-center">
                      AÇÕES
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading && itensOutrasLojas.length === 0">
                    <td
                      colspan="6"
                      class="text-center py-6"
                    >
                      <VProgressCircular
                        indeterminate
                        color="primary"
                      />
                    </td>
                  </tr>
                  <tr v-else-if="itensOutrasLojas.length === 0">
                    <td
                      colspan="6"
                      class="text-center py-6 text-medium-emphasis"
                    >
                      Nenhuma peça disponível encontrada em outras lojas.
                    </td>
                  </tr>
                  <tr
                    v-for="item in itensOutrasLojasPaginados"
                    :key="item.id"
                  >
                    <td>
                      <span class="font-weight-medium">{{ item.codigo }}</span>
                    </td>
                    <td>
                      <div class="d-flex flex-column">
                        <span class="font-weight-medium">{{ item.nome }}</span>
                        <span
                          v-if="item.nome_curto"
                          class="text-xs text-medium-emphasis"
                        >
                          {{ item.nome_curto }}
                        </span>
                      </div>
                    </td>
                    <td>
                      <VChip
                        size="small"
                        color="info"
                        variant="tonal"
                      >
                        {{ item.loja_nome }}
                      </VChip>
                    </td>
                    <td>
                      <VChip
                        size="small"
                        color="success"
                        variant="elevated"
                      >
                        {{ item.quantidade_disponivel }} {{ item.unidade_sigla || 'un' }}
                      </VChip>
                    </td>
                    <td>
                      {{ formatarValor(item.preco_consumidor) }}
                    </td>
                    <td class="text-center">
                      <VBtn
                        size="small"
                        color="primary"
                        prepend-icon="mdi-hand-back-right"
                        @click="abrirModalSolicitar(item)"
                      >
                        Solicitar Empréstimo
                      </VBtn>
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </div>

            <div
              v-if="itensOutrasLojas.length > ITENS_POR_PAGINA"
              class="d-flex justify-center mt-4"
            >
              <VPagination
                v-model="paginaEstoqueOutrasLojas"
                :length="totalPaginas(itensOutrasLojas)"
                :total-visible="5"
                size="small"
              />
            </div>
          </VWindowItem>

          <!-- ========================================== -->
          <!-- ABA 2: Meus Pedidos                        -->
          <!-- ========================================== -->
          <VWindowItem value="meus-pedidos">
            <div class="d-flex justify-space-between align-center mb-4">
              <h6 class="text-h6 font-weight-medium">
                Histórico de Pedidos de Empréstimo
              </h6>
              <VBtn
                variant="outlined"
                size="small"
                prepend-icon="mdi-refresh"
                :loading="loading"
                @click="carregarMeusPedidos"
              >
                Atualizar
              </VBtn>
            </div>

            <div class="table-responsive">
              <VTable class="text-no-wrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>CÓDIGO</th>
                    <th>PEÇA</th>
                    <th>LOJA ORIGEM</th>
                    <th>QTD</th>
                    <th>STATUS</th>
                    <th>PAGAMENTO</th>
                    <th>DATA SOLICITAÇÃO</th>
                    <th>DETALHES / RESPOSTA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading && meusPedidos.length === 0">
                    <td
                      colspan="9"
                      class="text-center py-6"
                    >
                      <VProgressCircular
                        indeterminate
                        color="primary"
                      />
                    </td>
                  </tr>
                  <tr v-else-if="meusPedidos.length === 0">
                    <td
                      colspan="9"
                      class="text-center py-6 text-medium-emphasis"
                    >
                      Você ainda não realizou nenhuma solicitação de empréstimo.
                    </td>
                  </tr>
                  <tr
                    v-for="pedido in meusPedidosPaginados"
                    :key="pedido.id"
                  >
                    <td>#{{ pedido.id }}</td>
                    <td>{{ pedido.codigo_item }}</td>
                    <td>{{ pedido.nome_item }}</td>
                    <td>
                      <VChip
                        size="small"
                        color="primary"
                        variant="tonal"
                      >
                        {{ pedido.loja_origem_nome }}
                      </VChip>
                    </td>
                    <td class="font-weight-bold">
                      {{ pedido.quantidade }}
                    </td>
                    <td>
                      <VChip
                        size="small"
                        :color="getStatusColor(pedido.status)"
                        variant="elevated"
                      >
                        {{ getStatusLabel(pedido.status) }}
                      </VChip>
                    </td>
                    <td>
                      <VChip
                        v-if="pedido.status === 'aprovado'"
                        size="small"
                        :color="pedido.pago ? 'success' : 'warning'"
                        variant="tonal"
                      >
                        {{ pedido.pago ? `Pago (${pedido.forma_pagamento || 'OK'})` : 'Pendente' }}
                      </VChip>
                      <span
                        v-else
                        class="text-medium-emphasis text-xs"
                      >-</span>
                    </td>
                    <td>{{ formatarData(pedido.data_solicitacao) }}</td>
                    <td>
                      <span
                        v-if="pedido.motivo_rejeicao"
                        class="text-error text-xs"
                      >
                        Rejeição: {{ pedido.motivo_rejeicao }}
                      </span>
                      <span
                        v-else-if="pedido.status === 'aprovado'"
                        class="text-success text-xs"
                      >
                        Aprovado em {{ formatarData(pedido.data_resposta) }}
                      </span>
                      <span
                        v-else
                        class="text-medium-emphasis text-xs"
                      >
                        Aguardando análise da loja de origem
                      </span>
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </div>

            <div
              v-if="meusPedidos.length > ITENS_POR_PAGINA"
              class="d-flex justify-center mt-4"
            >
              <VPagination
                v-model="paginaMeusPedidos"
                :length="totalPaginas(meusPedidos)"
                :total-visible="5"
                size="small"
              />
            </div>
          </VWindowItem>

          <!-- ========================================== -->
          <!-- ABA 3: Aprovações Pendentes (Admin/Super)   -->
          <!-- ========================================== -->
          <VWindowItem
            v-if="isAdminOrSuper"
            value="aprovacoes-pendentes"
          >
            <div class="d-flex justify-space-between align-center mb-4">
              <div>
                <h6 class="text-h6 font-weight-medium">
                  Solicitações Pendentes de Saída de Estoque
                </h6>
                <span class="text-caption text-medium-emphasis">
                  Apenas a loja de origem pode autorizar a liberação de itens do seu catálogo.
                </span>
              </div>
              <VBtn
                variant="outlined"
                size="small"
                prepend-icon="mdi-refresh"
                :loading="loading"
                @click="carregarPendentesAprovacao"
              >
                Atualizar
              </VBtn>
            </div>

            <div class="table-responsive">
              <VTable class="text-no-wrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>LOJA DESTINO (SOLICITANTE)</th>
                    <th>SOLICITANTE</th>
                    <th>CÓDIGO</th>
                    <th>PEÇA</th>
                    <th>QUANTIDADE</th>
                    <th>DATA</th>
                    <th>OBSERVAÇÕES</th>
                    <th class="text-center">
                      AÇÕES
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading && pendentesAprovacao.length === 0">
                    <td
                      colspan="9"
                      class="text-center py-6"
                    >
                      <VProgressCircular
                        indeterminate
                        color="primary"
                      />
                    </td>
                  </tr>
                  <tr v-else-if="pendentesAprovacao.length === 0">
                    <td
                      colspan="9"
                      class="text-center py-6 text-medium-emphasis"
                    >
                      Nenhuma solicitação pendente de aprovação no momento.
                    </td>
                  </tr>
                  <tr
                    v-for="ped in pendentesAprovacaoPaginados"
                    :key="ped.id"
                  >
                    <td>#{{ ped.id }}</td>
                    <td>
                      <VChip
                        size="small"
                        color="info"
                        variant="tonal"
                      >
                        {{ ped.loja_destino_nome }}
                      </VChip>
                    </td>
                    <td>{{ ped.solicitante_nome || '-' }}</td>
                    <td>{{ ped.codigo_item }}</td>
                    <td>{{ ped.nome_item }}</td>
                    <td class="font-weight-bold text-primary">
                      {{ ped.quantidade }}
                    </td>
                    <td>{{ formatarData(ped.data_solicitacao) }}</td>
                    <td>
                      <span class="text-xs text-medium-emphasis">
                        {{ ped.observacoes || '-' }}
                      </span>
                    </td>
                    <td class="text-center">
                      <div class="d-flex gap-2 justify-center">
                        <VBtn
                          size="small"
                          color="success"
                          prepend-icon="mdi-check"
                          @click="abrirConfirmarAprovacao(ped)"
                        >
                          Aprovar
                        </VBtn>
                        <VBtn
                          size="small"
                          color="error"
                          variant="outlined"
                          prepend-icon="mdi-close"
                          @click="abrirModalRejeicao(ped)"
                        >
                          Rejeitar
                        </VBtn>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </div>

            <div
              v-if="pendentesAprovacao.length > ITENS_POR_PAGINA"
              class="d-flex justify-center mt-4"
            >
              <VPagination
                v-model="paginaPendentesAprovacao"
                :length="totalPaginas(pendentesAprovacao)"
                :total-visible="5"
                size="small"
              />
            </div>
          </VWindowItem>

          <!-- ========================================== -->
          <!-- ABA 4: Todos os Empréstimos (Admin/Super)  -->
          <!-- ========================================== -->
          <VWindowItem
            v-if="isAdminOrSuper"
            value="todos-emprestimos"
          >
            <VRow class="mb-4 align-center">
              <VCol
                cols="12"
                md="4"
              >
                <VSelect
                  v-model="filtroStatus"
                  density="compact"
                  variant="outlined"
                  label="Filtrar por Status"
                  :items="[
                    { title: 'Todos os Status', value: '' },
                    { title: 'Solicitados', value: 'solicitado' },
                    { title: 'Aprovados', value: 'aprovado' },
                    { title: 'Rejeitados', value: 'rejeitado' }
                  ]"
                  @update:model-value="carregarTodosEmprestimos"
                />
              </VCol>
              <VCol
                cols="12"
                md="8"
                class="d-flex justify-end gap-2"
              >
                <VBtn
                  variant="outlined"
                  prepend-icon="mdi-refresh"
                  :loading="loading"
                  @click="carregarTodosEmprestimos"
                >
                  Atualizar
                </VBtn>
              </VCol>
            </VRow>

            <div class="table-responsive">
              <VTable class="text-no-wrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>LOJA ORIGEM</th>
                    <th>LOJA DESTINO</th>
                    <th>SOLICITANTE</th>
                    <th>CÓDIGO</th>
                    <th>PEÇA</th>
                    <th>QTD</th>
                    <th>STATUS</th>
                    <th>PAGAMENTO</th>
                    <th>DATA</th>
                    <th class="text-center">
                      AÇÕES
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading && todosEmprestimos.length === 0">
                    <td
                      colspan="11"
                      class="text-center py-6"
                    >
                      <VProgressCircular
                        indeterminate
                        color="primary"
                      />
                    </td>
                  </tr>
                  <tr v-else-if="todosEmprestimos.length === 0">
                    <td
                      colspan="11"
                      class="text-center py-6 text-medium-emphasis"
                    >
                      Nenhum empréstimo registrado.
                    </td>
                  </tr>
                  <tr
                    v-for="item in todosEmprestimosPaginados"
                    :key="item.id"
                  >
                    <td>#{{ item.id }}</td>
                    <td>
                      <VChip
                        size="small"
                        color="primary"
                        variant="tonal"
                      >
                        {{ item.loja_origem_nome }}
                      </VChip>
                    </td>
                    <td>
                      <VChip
                        size="small"
                        color="info"
                        variant="tonal"
                      >
                        {{ item.loja_destino_nome }}
                      </VChip>
                    </td>
                    <td>{{ item.solicitante_nome || '-' }}</td>
                    <td>{{ item.codigo_item }}</td>
                    <td>{{ item.nome_item }}</td>
                    <td class="font-weight-bold">
                      {{ item.quantidade }}
                    </td>
                    <td>
                      <VChip
                        size="small"
                        :color="getStatusColor(item.status)"
                        variant="elevated"
                      >
                        {{ getStatusLabel(item.status) }}
                      </VChip>
                    </td>
                    <td>
                      <VChip
                        v-if="item.status === 'aprovado'"
                        size="small"
                        :color="item.pago ? 'success' : 'warning'"
                        variant="tonal"
                      >
                        {{ item.pago ? `Pago (${item.forma_pagamento || 'OK'})` : 'Pendente' }}
                      </VChip>
                      <span
                        v-else
                        class="text-medium-emphasis text-xs"
                      >-</span>
                    </td>
                    <td>{{ formatarData(item.data_solicitacao) }}</td>
                    <td class="text-center">
                      <VBtn
                        v-if="item.status === 'aprovado' && !item.pago"
                        size="small"
                        color="warning"
                        variant="tonal"
                        prepend-icon="mdi-cash-check"
                        @click="abrirModalPagamento(item)"
                      >
                        Registrar Pagamento
                      </VBtn>
                      <span
                        v-else-if="item.status === 'aprovado' && item.pago"
                        class="text-xs text-success"
                      >
                        Quitado em {{ formatarData(item.data_pagamento) }}
                      </span>
                      <span
                        v-else
                        class="text-xs text-medium-emphasis"
                      >-</span>
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </div>

            <div
              v-if="todosEmprestimos.length > ITENS_POR_PAGINA"
              class="d-flex justify-center mt-4"
            >
              <VPagination
                v-model="paginaTodosEmprestimos"
                :length="totalPaginas(todosEmprestimos)"
                :total-visible="5"
                size="small"
              />
            </div>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>

    <!-- ========================================== -->
    <!-- DIÁLOGOS MODAIS                            -->
    <!-- ========================================== -->

    <!-- Modal Solicitar Empréstimo -->
    <VDialog
      v-model="dialogSolicitar"
      max-width="500"
    >
      <VCard v-if="itemSelecionadoParaSolicitar">
        <VCardTitle class="text-h6 font-weight-bold pa-4">
          Solicitar Empréstimo de Peça
        </VCardTitle>
        <VDivider />
        <VCardText class="pa-4">
          <div class="mb-4">
            <div class="text-caption text-medium-emphasis">
              Peça Selecionada:
            </div>
            <div class="text-subtitle-1 font-weight-medium">
              {{ itemSelecionadoParaSolicitar.nome }} ({{ itemSelecionadoParaSolicitar.codigo }})
            </div>
            <div class="text-caption text-medium-emphasis">
              Loja de Origem: <strong>{{ itemSelecionadoParaSolicitar.loja_nome }}</strong> |
              Disponível: <strong>{{ itemSelecionadoParaSolicitar.quantidade_disponivel }}</strong>
            </div>
          </div>

          <VTextField
            v-model="quantidadeSolicitada"
            label="Quantidade Desejada"
            type="number"
            min="1"
            :max="itemSelecionadoParaSolicitar.quantidade_disponivel"
            variant="outlined"
            density="compact"
            class="mb-3"
          />

          <VTextarea
            v-model="observacoesSolicitacao"
            label="Observações / Motivo do Empréstimo"
            rows="3"
            variant="outlined"
            density="compact"
            placeholder="Ex: Peça necessária para ordem de serviço urgente #123..."
          />
        </VCardText>
        <VDivider />
        <VCardActions class="pa-4">
          <VSpacer />
          <VBtn
            variant="outlined"
            color="secondary"
            @click="dialogSolicitar = false"
          >
            Cancelar
          </VBtn>
          <VBtn
            color="primary"
            :loading="enviandoSolicitacao"
            @click="confirmarSolicitacao"
          >
            Enviar Solicitação
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Modal Confirmar Aprovação -->
    <VDialog
      v-model="dialogAprovar"
      max-width="500"
    >
      <VCard v-if="itemEmAprovacao">
        <VCardTitle class="text-h6 font-weight-bold pa-4 text-success">
          Aprovar Empréstimo de Peça
        </VCardTitle>
        <VDivider />
        <VCardText class="pa-4">
          <p class="text-body-1">
            Deseja autorizar a saída de <strong>{{ itemEmAprovacao.quantidade }}</strong> unidade(s) de
            <strong>{{ itemEmAprovacao.nome_item }}</strong> para a loja
            <strong>{{ itemEmAprovacao.loja_destino_nome }}</strong>?
          </p>
          <VAlert
            type="info"
            variant="tonal"
            density="compact"
          >
            O estoque da sua loja será debitado imediatamente e a peça será vinculada ao catálogo da filial de destino.
          </VAlert>
        </VCardText>
        <VDivider />
        <VCardActions class="pa-4">
          <VSpacer />
          <VBtn
            variant="outlined"
            color="secondary"
            @click="dialogAprovar = false"
          >
            Cancelar
          </VBtn>
          <VBtn
            color="success"
            :loading="processandoAcao"
            @click="confirmarAprovacao"
          >
            Confirmar e Transferir Estoque
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Modal Rejeitar Empréstimo -->
    <VDialog
      v-model="dialogRejeitar"
      max-width="500"
    >
      <VCard v-if="itemEmAprovacao">
        <VCardTitle class="text-h6 font-weight-bold pa-4 text-error">
          Rejeitar Solicitação de Empréstimo
        </VCardTitle>
        <VDivider />
        <VCardText class="pa-4">
          <p class="text-body-2 mb-3">
            Informe o motivo da recusa do empréstimo de <strong>{{ itemEmAprovacao.nome_item }}</strong> para a loja
            <strong>{{ itemEmAprovacao.loja_destino_nome }}</strong>:
          </p>
          <VTextarea
            v-model="motivoRejeicao"
            label="Motivo da Rejeição (opcional)"
            rows="3"
            variant="outlined"
            density="compact"
            placeholder="Ex: Peça já reservada para cliente da matriz..."
          />
        </VCardText>
        <VDivider />
        <VCardActions class="pa-4">
          <VSpacer />
          <VBtn
            variant="outlined"
            color="secondary"
            @click="dialogRejeitar = false"
          >
            Cancelar
          </VBtn>
          <VBtn
            color="error"
            :loading="processandoAcao"
            @click="confirmarRejeicao"
          >
            Confirmar Rejeição
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Modal Registrar Pagamento -->
    <VDialog
      v-model="dialogPagamento"
      max-width="500"
    >
      <VCard v-if="itemEmPagamento">
        <VCardTitle class="text-h6 font-weight-bold pa-4 text-primary">
          Registrar Pagamento de Empréstimo
        </VCardTitle>
        <VDivider />
        <VCardText class="pa-4">
          <p class="text-body-2 mb-3">
            Registrar o acerto financeiro do empréstimo #{{ itemEmPagamento.id }} referente a
            <strong>{{ itemEmPagamento.quantidade }}x {{ itemEmPagamento.nome_item }}</strong>
            emprestado de <strong>{{ itemEmPagamento.loja_origem_nome }}</strong> para
            <strong>{{ itemEmPagamento.loja_destino_nome }}</strong>.
          </p>
          <VSelect
            v-model="formaPagamentoSelecionada"
            label="Forma de Pagamento"
            :items="opcoesFormasPagamento"
            variant="outlined"
            density="compact"
            class="mt-2"
          />
        </VCardText>
        <VDivider />
        <VCardActions class="pa-4">
          <VSpacer />
          <VBtn
            variant="outlined"
            color="secondary"
            @click="dialogPagamento = false"
          >
            Cancelar
          </VBtn>
          <VBtn
            color="primary"
            :loading="registrandoPagamento"
            @click="confirmarRegistroPagamento"
          >
            Salvar Pagamento
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>
