<template>
  <div>
    <VContainer
      fluid
      class="px-2 px-sm-4"
    >
      <!-- Tabs Mobile para alternar entre Produtos e Carrinho -->
      <VTabs
        v-if="smAndDown"
        v-model="tabMobile"
        grow
        color="primary"
        class="mb-4 bg-surface rounded elevation-1"
      >
        <VTab value="produtos">
          <VIcon
            icon="mdi-magnify"
            class="me-1"
          />
          Produtos ({{ products.length }})
        </VTab>
        <VTab value="carrinho">
          <VBadge
            :content="cartItems.length"
            :model-value="cartItems.length > 0"
            color="primary"
            class="me-2"
          >
            <VIcon icon="mdi-cart" />
          </VBadge>
          Carrinho
        </VTab>
      </VTabs>

      <VRow>
        <!-- Painel Esquerdo (Produtos) -->
        <VCol
          v-if="!smAndDown || tabMobile === 'produtos'"
          cols="12"
          md="7"
        >
          <VCard class="mb-4">
            <VCardTitle class="d-flex flex-wrap align-center justify-space-between gap-2 py-3 px-4">
              <span class="text-h6 font-weight-bold">Produtos</span>
              <VTextField
                v-model="searchQuery"
                append-inner-icon="mdi-magnify"
                label="Código, referência ou descrição..."
                variant="outlined"
                density="compact"
                hide-details
                class="w-100 w-sm-auto flex-grow-1"
                style="min-width: 200px;"
                clearable
              />
            </VCardTitle>

            <VCardText class="pa-2 pa-sm-4">
              <VProgressLinear
                v-if="loading"
                indeterminate
                color="primary"
              />
              <div v-else>
                <div class="table-responsive">
                  <VTable
                    density="compact"
                    class="text-no-wrap"
                  >
                    <thead>
                      <tr>
                        <th
                          v-for="header in productHeaders"
                          :key="header.key"
                          :class="header.align"
                        >
                          {{ header.title }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in paginatedProducts"
                        :key="item.id"
                        class="product-row"
                        :class="{ 'product-row--disabled': item.quantidade_disponivel <= 0 }"
                        @click="item.quantidade_disponivel > 0 && addToCart(item)"
                      >
                        <td class="font-weight-medium">
                          {{ item.codigo }}
                        </td>
                        <td class="product-name-cell">
                          <VTooltip
                            :text="item.nome"
                            location="top"
                            open-delay="300"
                          >
                            <template #activator="{ props: tooltipProps }">
                              <span
                                v-bind="tooltipProps"
                                class="product-name-text"
                              >{{ item.nome }}</span>
                            </template>
                          </VTooltip>
                        </td>
                        <td class="text-end font-weight-bold">
                          {{ formatCurrency(item.preco_consumidor) }}
                        </td>
                        <td class="text-end">
                          <VChip
                            size="x-small"
                            :color="item.quantidade_disponivel > 0 ? 'success' : 'error'"
                            variant="tonal"
                          >
                            {{ item.quantidade_disponivel }}
                          </VChip>
                        </td>
                        <td class="text-center">
                          <VBtn
                            color="primary"
                            size="small"
                            icon="mdi-cart-plus"
                            :disabled="item.quantidade_disponivel <= 0"
                            title="Adicionar ao carrinho"
                            @click.stop="addToCart(item)"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </VTable>
                </div>

                <!-- Paginação -->
                <div class="d-flex justify-center align-center mt-4 flex-wrap gap-2">
                  <VBtn
                    icon="mdi-chevron-left"
                    size="small"
                    :disabled="currentPage === 1"
                    @click="prevPage"
                  />
                  
                  <span class="mx-2 text-caption">
                    Página {{ currentPage }} de {{ totalPages }}
                  </span>
                  
                  <VBtn
                    icon="mdi-chevron-right"
                    size="small"
                    :disabled="currentPage === totalPages"
                    @click="nextPage"
                  />
                </div>
              </div>
            </VCardText>
          </VCard>
        </VCol>

        <!-- Painel Direito (Carrinho) -->
        <VCol
          v-if="!smAndDown || tabMobile === 'carrinho'"
          cols="12"
          md="5"
        >
          <VCard class="mb-4">
            <VCardTitle class="d-flex align-center justify-space-between py-3 px-4">
              <span class="text-h6 font-weight-bold">Carrinho</span>
              <VChip
                color="primary"
                text-color="white"
                size="small"
              >
                {{ cartItems.length }} {{ cartItems.length === 1 ? 'item' : 'itens' }}
              </VChip>
            </VCardTitle>

            <VCardText class="pa-3 pa-sm-4">
              <VList
                v-if="cartItems.length > 0"
                class="pa-0"
              >
                <VListItem
                  v-for="(item, index) in cartItems"
                  :key="index"
                  class="mb-2 border rounded pa-2"
                >
                  <VListItemTitle class="font-weight-medium">
                    {{ item.nome }}
                  </VListItemTitle>
                  <VListItemSubtitle>
                    {{ formatCurrency(item.price) }} × {{ item.quantity }}
                  </VListItemSubtitle>

                  <template #append>
                    <div class="d-flex align-center gap-1">
                      <div class="me-2 font-weight-bold text-success text-body-2">
                        {{ formatCurrency(item.price * item.quantity) }}
                      </div>
                      
                      <div class="d-flex align-center">
                        <VBtn
                          icon="mdi-minus"
                          size="x-small"
                          variant="tonal"
                          @click="decrementItem(index)"
                        />
                        <span class="mx-1 text-caption font-weight-bold">{{ item.quantity }}</span>
                        <VBtn
                          icon="mdi-plus"
                          size="x-small"
                          variant="tonal"
                          @click="incrementItem(index)"
                        />
                        <VBtn
                          icon="mdi-delete"
                          size="x-small"
                          color="error"
                          variant="text"
                          class="ms-1"
                          @click="removeCartItem(index)"
                        />
                      </div>
                    </div>
                  </template>
                </VListItem>
              </VList>

              <div
                v-else
                class="text-center py-8 text-medium-emphasis"
              >
                <VIcon
                  icon="mdi-cart-outline"
                  size="48"
                  class="mb-2"
                />
                <div>Carrinho vazio</div>
                <VBtn
                  v-if="smAndDown"
                  variant="text"
                  color="primary"
                  class="mt-2"
                  @click="tabMobile = 'produtos'"
                >
                  Ir para Lista de Produtos
                </VBtn>
              </div>
            </VCardText>

            <VDivider />

            <VCardText class="pa-3 pa-sm-4">
              <!-- Subtotal e Desconto -->
              <VRow
                dense
                class="align-center mb-1"
              >
                <VCol
                  cols="6"
                  class="text-body-2"
                >
                  Subtotal:
                </VCol>
                <VCol
                  cols="6"
                  class="text-end font-weight-bold"
                >
                  {{ formatCurrency(calculateSubtotal()) }}
                </VCol>
              </VRow>

              <VRow
                dense
                class="align-center mb-1"
              >
                <VCol
                  cols="6"
                  class="text-body-2"
                >
                  Desconto (%):
                </VCol>
                <VCol
                  cols="6"
                  class="text-end"
                >
                  <VTextField
                    v-model="discountValue"
                    variant="outlined"
                    density="compact"
                    type="number"
                    min="0"
                    max="100"
                    hide-details
                    style="max-width: 100px; margin-left: auto;"
                    @change="applyDiscount"
                  />
                </VCol>
              </VRow>

              <VDivider class="my-2" />

              <VRow
                dense
                class="align-center mb-1"
              >
                <VCol cols="6">
                  <span class="text-h6 font-weight-bold">Total:</span>
                </VCol>
                <VCol
                  cols="6"
                  class="text-end"
                >
                  <span class="text-h5 font-weight-bold text-primary">
                    {{ formatCurrency(calculateTotal()) }}
                  </span>
                </VCol>
              </VRow>

              <!-- Troco -->
              <VRow
                v-if="paymentMethod === 'cash' && calculateChange() > 0"
                dense
                class="align-center"
              >
                <VCol cols="6">
                  <span class="text-subtitle-2">Troco:</span>
                </VCol>
                <VCol
                  cols="6"
                  class="text-end"
                >
                  <span class="text-subtitle-1 text-success font-weight-bold">
                    {{ formatCurrency(calculateChange()) }}
                  </span>
                </VCol>
              </VRow>
            </VCardText>

            <VDivider />

            <!-- Formas de Pagamento -->
            <VCardText class="pa-3 pa-sm-4">
              <h4 class="text-subtitle-2 font-weight-bold mb-2">
                Forma de Pagamento:
              </h4>
              <VRadioGroup
                v-model="paymentMethod"
                :inline="!smAndDown"
                density="compact"
                hide-details
                class="payment-method-group"
              >
                <VRadio
                  v-for="method in paymentMethods"
                  :key="method.value"
                  :label="method.label"
                  :value="method.value"
                  class="me-3 mb-1"
                />
              </VRadioGroup>

              <div
                v-if="paymentMethod === 'cash'"
                class="mt-3"
              >
                <VTextField
                  v-model="cashAmount"
                  label="Valor recebido"
                  variant="outlined"
                  density="compact"
                  prefix="R$"
                  type="number"
                  min="0"
                  hide-details
                />
              </div>
            </VCardText>

            <VDivider />

            <VCardActions class="pa-3 pa-sm-4 d-flex flex-wrap flex-sm-row gap-2">
              <VBtn
                color="error"
                variant="outlined"
                :disabled="cartItems.length === 0"
                class="flex-grow-1 flex-sm-grow-0"
                @click="clearCart"
              >
                Limpar Carrinho
              </VBtn>
              <VBtn
                color="secondary"
                variant="tonal"
                prepend-icon="mdi-printer"
                :disabled="!ultimaVendaFinalizada"
                class="flex-grow-1 flex-sm-grow-0"
                title="Reimprimir cupom da última venda"
                @click="reimprimirUltimoCupom"
              >
                Imprimir Cupom
              </VBtn>
              <VBtn
                color="primary"
                variant="elevated"
                size="large"
                :disabled="!canFinalize"
                class="flex-grow-1 flex-sm-grow-0"
                @click="finalizeSale"
              >
                Finalizar Venda
              </VBtn>
            </VCardActions>
          </VCard>
        </VCol>
      </VRow>

      <!-- Botão Flutuante de Atalho para Carrinho no Mobile -->
      <div
        v-if="smAndDown && tabMobile === 'produtos' && cartItems.length > 0"
        class="floating-cart-bar"
      >
        <VBtn
          color="primary"
          block
          size="large"
          elevation="6"
          prepend-icon="mdi-cart"
          @click="tabMobile = 'carrinho'"
        >
          Ver Carrinho ({{ cartItems.length }} itens) — {{ formatCurrency(calculateTotal()) }}
        </VBtn>
      </div>
    </VContainer>

    <!-- Snackbar para notificações -->
    <VSnackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
    >
      {{ snackbar.text }}
      <template #actions>
        <VBtn
          color="white"
          icon="mdi-close"
          @click="snackbar.show = false"
        />
      </template>
    </VSnackbar>
  </div>
</template>

<script setup>
import Estoque from '@/server/Estoque'
import Vendas from '@/server/Vendas'
import { imprimirRecibo } from '@/utils/imprimirRecibo'
import { computed, onMounted, ref } from 'vue'
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()
const tabMobile = ref('produtos')

// Estado para cupom
const ultimaVendaFinalizada = ref(null)

// Estado reativo
const searchQuery = ref('')
const cartItems = ref([])
const discountValue = ref(0)
const paymentMethod = ref(null)
const cashAmount = ref('')
const products = ref([])
const loading = ref(true)
const currentPage = ref(1)
const itemsPerPage = 10

// Snackbar
const snackbar = ref({
  show: false,
  text: '',
  color: 'success'
})

// Headers da tabela
const productHeaders = [
  { title: 'Código', key: 'codigo', align: 'start', sortable: true },
  { title: 'Nome', key: 'nome', align: 'start', sortable: true },
  { title: 'Preço', key: 'preco_consumidor', align: 'end', sortable: true },
  { title: 'Estoque', key: 'quantidade_disponivel', align: 'end', sortable: true },
  { title: 'Ações', key: 'actions', align: 'center', sortable: false },
]

// Carregar produtos do estoque
const loadProducts = async () => {
  try {
    loading.value = true
    const response = await Estoque.listarItens()
    products.value = response.data
  } catch (error) {
    console.error('Erro ao carregar produtos:', error)
    showSnackbar('Erro ao carregar produtos', 'error')
  } finally {
    loading.value = false
  }
}

// Métodos de pagamento
const paymentMethods = [
  { label: 'Dinheiro', value: 'cash' },
  { label: 'Cartão de Crédito', value: 'credit' },
  { label: 'Cartão de Débito', value: 'debit' },
  { label: 'PIX', value: 'pix' },
]

// Computed properties
const filteredProducts = computed(() => {
  if (!searchQuery.value) {
    return products.value
  }
  
  const query = searchQuery.value.toLowerCase()
  
  return products.value.filter(product => 
    product.codigo.toLowerCase().includes(query) || 
    product.nome.toLowerCase().includes(query)
  )
})

const canFinalize = computed(() => {
  if (cartItems.value.length === 0) return false
  if (!paymentMethod.value) return false
  
  if (paymentMethod.value === 'cash') {
    return parseFloat(cashAmount.value || 0) >= calculateTotal()
  }
  
  return true
})

// Computed properties para paginação
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  
  return filteredProducts.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage)
})

// Métodos
const formatCurrency = value => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

const addToCart = product => {
  const existingItem = cartItems.value.find(item => item.id === product.id)
  
  if (existingItem) {
    if (existingItem.quantity < product.quantidade_disponivel) {
      existingItem.quantity++
      showSnackbar('Item adicionado ao carrinho', 'success')
    } else {
      showSnackbar('Quantidade máxima atingida', 'warning')
    }
  } else {
    cartItems.value.push({
      id: product.id,
      codigo: product.codigo,
      nome: product.nome,
      price: product.preco_consumidor,
      quantidade_disponivel: product.quantidade_disponivel,
      quantity: 1
    })
    showSnackbar('Item adicionado ao carrinho', 'success')
  }
}

const incrementItem = index => {
  cartItems.value[index].quantity++
}

const decrementItem = index => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--
  } else {
    removeCartItem(index)
  }
}

const removeCartItem = index => {
  cartItems.value.splice(index, 1)
}

const clearCart = () => {
  cartItems.value = []
  discountValue.value = 0
  showSnackbar('Carrinho esvaziado', 'info')
}

const calculateSubtotal = () => {
  return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
}

const calculateTotal = () => {
  const subtotal = calculateSubtotal()
  const discountPercentage = parseFloat(discountValue.value) || 0
  const discountAmount = (subtotal * discountPercentage) / 100
  
  return Math.max(0, subtotal - discountAmount)
}

const calculateChange = () => {
  if (!cashAmount.value) return 0
  const change = parseFloat(cashAmount.value) - calculateTotal()
  
  return change > 0 ? change : 0
}

const applyDiscount = () => {
  const discount = parseFloat(discountValue.value) || 0

  // Limita o desconto entre 0 e 100%
  discountValue.value = Math.min(Math.max(0, discount), 100)
}

const obterUsuarioLogado = () => {
  try {
    return JSON.parse(localStorage.getItem('userData') || '{}')
  } catch (e) {
    return {}
  }
}

const montarDadosRecibo = (vendaCriada, itensRecibo, valoresVenda) => {
  const userData = obterUsuarioLogado()

  return {
    lojaNome: userData.loja_nome || 'REAL REVISION',
    vendaId: vendaCriada?.id || '',
    dataVenda: vendaCriada?.data_venda || new Date().toISOString(),
    vendedorNome: userData.username || userData.fullName || 'Atendente',
    itens: itensRecibo,
    subtotal: valoresVenda.subtotal,
    descontoPercentual: valoresVenda.discountPercentage,
    descontoValor: valoresVenda.discountAmount,
    totalGeral: valoresVenda.total,
    formaPagamento: valoresVenda.formaPagamentoLabel,
    parcelas: null,
    valorRecebido: valoresVenda.valorRecebidoNum,
    troco: valoresVenda.trocoNum,
  }
}

const reimprimirUltimoCupom = () => {
  if (ultimaVendaFinalizada.value) {
    imprimirRecibo(ultimaVendaFinalizada.value)
  }
}

const finalizeSale = async () => {
  try {
    const userData = obterUsuarioLogado()

    const subtotal = calculateSubtotal()
    const discountPercentage = parseFloat(discountValue.value) || 0
    const discountAmount = (subtotal * discountPercentage) / 100
    const total = calculateTotal()
    const selectedMethod = paymentMethods.find(m => m.value === paymentMethod.value)
    const formaPagamentoLabel = selectedMethod ? selectedMethod.label : 'Não informada'
    const valorRecebidoNum = paymentMethod.value === 'cash' ? parseFloat(cashAmount.value || 0) : null
    const trocoNum = paymentMethod.value === 'cash' ? calculateChange() : null

    // Snapshot dos itens do carrinho para o recibo antes da limpeza
    const itensRecibo = cartItems.value.map(item => ({
      codigo: item.codigo,
      nome: item.nome,
      quantidade: item.quantity,
      precoUnitario: item.price,
      totalItem: item.price * item.quantity,
    }))

    // Prepara os dados da venda
    const dadosVenda = {
      loja_id: userData.loja_id || 1,
      vendedor_id: userData.id || 1,
      forma_pagamento: formaPagamentoLabel,
      parcelas: null, // TODO: Implementar quando houver parcelamento de cartão
      observacoes: 'Venda realizada no PDV',
      valor_total: total,
      desconto_percentual: discountPercentage,
      desconto_valor: 0,
      itens: cartItems.value.map(item => ({
        item_id: item.id,
        quantidade: item.quantity,
        preco_unitario: item.price,
      })),
    }

    // Cria a venda
    const response = await Vendas.criarVenda(dadosVenda)
    const vendaCriada = response?.data || response

    const dadosRecibo = montarDadosRecibo(vendaCriada, itensRecibo, { subtotal, discountPercentage, discountAmount, total, formaPagamentoLabel, valorRecebidoNum, trocoNum })

    // Armazena para permitir reimpressão manual
    ultimaVendaFinalizada.value = dadosRecibo

    showSnackbar('Venda finalizada com sucesso!', 'success')
    clearCart()
    paymentMethod.value = null
    cashAmount.value = ''
    
    // Imprime o cupom automaticamente
    imprimirRecibo(dadosRecibo)

    // Recarrega os produtos para atualizar o estoque
    await loadProducts()
  } catch (error) {
    console.error('Erro ao finalizar venda:', error)
    showSnackbar('Erro ao finalizar venda. Tente novamente.', 'error')
  }
}

const showSnackbar = (text, color = 'success') => {
  snackbar.value.text = text
  snackbar.value.color = color
  snackbar.value.show = true
}

// Métodos de paginação
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

// Carregar produtos ao montar o componente
onMounted(() => {
  loadProducts()
})
</script>

<style scoped>
.table-responsive {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.floating-cart-bar {
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  z-index: 10;
}

.v-list-item {
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 8px;
  margin-block-end: 8px;
}

.payment-method-group :deep(.v-selection-control-group) {
  flex-wrap: wrap;
  row-gap: 4px;
}

.product-row {
  cursor: pointer;
}

.product-row:hover {
  background-color: rgba(var(--v-theme-primary), 0.06);
}

.product-row--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.product-name-cell {
  max-inline-size: 220px;
}

.product-name-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-inline-size: 220px;
}
</style>