<template>
  <VApp>
    <VAppBar
      color="primary"
      dark
    >
      <VAppBarTitle>PDV Simplificado</VAppBarTitle>
    </VAppBar>

    <VMain>
      <VContainer>
        <VRow>
          <!-- Painel Esquerdo (Produtos) -->
          <VCol
            cols="12"
            md="7"
          >
            <VCard class="mb-4">
              <VCardTitle>
                Produtos
                <VSpacer />
                <VTextField
                  v-model="searchQuery"
                  append-icon="mdi-magnify"
                  label="Buscar produto"
                  variant="outlined"
                  density="compact"
                  hide-details
                  class="ml-2"
                  clearable
                />
              </VCardTitle>

              <VCardText>
                <VProgressLinear
                  v-if="loading"
                  indeterminate
                  color="primary"
                />
                <div v-else>
                  <VTable>
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
                      >
                        <td>{{ item.codigo }}</td>
                        <td>{{ item.nome }}</td>
                        <td class="text-end">
                          {{ formatCurrency(item.preco_consumidor) }}
                        </td>
                        <td class="text-end">
                          {{ item.quantidade_disponivel }}
                        </td>
                        <td class="text-center">
                          <VBtn
                            color="primary"
                            size="small"
                            icon
                            :disabled="item.quantidade_disponivel <= 0"
                            @click="addToCart(item)"
                          >
                            <VIcon>mdi-cart-plus</VIcon>
                          </VBtn>
                        </td>
                      </tr>
                    </tbody>
                  </VTable>

                  <!-- Paginação -->
                  <div class="d-flex justify-center align-center mt-4">
                    <VBtn
                      icon
                      :disabled="currentPage === 1"
                      @click="prevPage"
                    >
                      <VIcon>mdi-chevron-left</VIcon>
                    </VBtn>
                    
                    <span class="mx-4">
                      Página {{ currentPage }} de {{ totalPages }}
                    </span>
                    
                    <VBtn
                      icon
                      :disabled="currentPage === totalPages"
                      @click="nextPage"
                    >
                      <VIcon>mdi-chevron-right</VIcon>
                    </VBtn>
                  </div>
                </div>
              </VCardText>
            </VCard>
          </VCol>

          <!-- Painel Direito (Carrinho) -->
          <VCol
            cols="12"
            md="5"
          >
            <VCard class="mb-4">
              <VCardTitle>
                Carrinho
                <VSpacer />
                <VChip
                  color="primary"
                  text-color="white"
                >
                  {{ cartItems.length }} itens
                </VChip>
              </VCardTitle>

              <VCardText>
                <VList v-if="cartItems.length > 0">
                  <VListItem
                    v-for="(item, index) in cartItems"
                    :key="index"
                    class="mb-2"
                  >
                    <VListItemTitle>{{ item.name }}</VListItemTitle>
                    <VListItemSubtitle>
                      {{ formatCurrency(item.price) }} × {{ item.quantity }}
                    </VListItemSubtitle>

                    <template #append>
                      <div class="d-flex align-center">
                        <div class="mr-2 font-weight-bold">
                          {{ formatCurrency(item.price * item.quantity) }}
                        </div>
                        
                        <div>
                          <VBtn
                            icon
                            density="compact"
                            @click="decrementItem(index)"
                          >
                            <VIcon>mdi-minus</VIcon>
                          </VBtn>
                          
                          <VBtn
                            icon
                            density="compact"
                            color="error"
                            @click="removeCartItem(index)"
                          >
                            <VIcon>mdi-delete</VIcon>
                          </VBtn>
                          
                          <VBtn
                            icon
                            density="compact"
                            @click="incrementItem(index)"
                          >
                            <VIcon>mdi-plus</VIcon>
                          </VBtn>
                        </div>
                      </div>
                    </template>
                  </VListItem>
                </VList>

                <div
                  v-else
                  class="text-center pa-4"
                >
                  Carrinho vazio
                </div>
              </VCardText>

              <VDivider />

              <VCardText>
                <!-- Desconto -->
                <VRow>
                  <VCol cols="6">
                    Subtotal:
                  </VCol>
                  <VCol
                    cols="6"
                    class="text-right font-weight-bold"
                  >
                    {{ formatCurrency(calculateSubtotal()) }}
                  </VCol>
                </VRow>

                <VRow>
                  <VCol cols="6">
                    Desconto:
                  </VCol>
                  <VCol
                    cols="6"
                    class="text-right"
                  >
                    <VTextField
                      v-model="discountValue"
                      label="%"
                      variant="outlined"
                      density="compact"
                      type="number"
                      min="0"
                      max="100"
                      hide-details
                      class="mb-2"
                      @change="applyDiscount"
                    />
                  </VCol>
                </VRow>

                <VRow>
                  <VCol cols="6">
                    <span class="text-h6 font-weight-bold">Total:</span>
                  </VCol>
                  <VCol
                    cols="6"
                    class="text-right"
                  >
                    <span class="text-h6 font-weight-bold text-primary">
                      {{ formatCurrency(calculateTotal()) }}
                    </span>
                  </VCol>
                </VRow>
              </VCardText>

              <VDivider />

              <!-- Formas de Pagamento -->
              <VCardText>
                <h3 class="text-subtitle-1 mb-2">
                  Forma de Pagamento:
                </h3>
                <VRadioGroup
                  v-model="paymentMethod"
                  row
                  dense
                >
                  <VRadio
                    v-for="method in paymentMethods"
                    :key="method.value"
                    :label="method.label"
                    :value="method.value"
                  />
                </VRadioGroup>

                <div
                  v-if="paymentMethod === 'cash'"
                  class="mt-2"
                >
                  <VTextField
                    v-model="cashAmount"
                    label="Valor recebido"
                    variant="outlined"
                    density="compact"
                    prefix="R$"
                    type="number"
                    min="0"
                  />

                  <div 
                    v-if="calculateChange() > 0"
                    class="text-success font-weight-bold mt-2"
                  >
                    Troco: {{ formatCurrency(calculateChange()) }}
                  </div>
                </div>
              </VCardText>

              <VCardActions class="pa-4">
                <VBtn
                  color="error"
                  variant="outlined"
                  :disabled="cartItems.length === 0"
                  class="mr-2"
                  @click="clearCart"
                >
                  Limpar
                </VBtn>
                <VBtn
                  color="primary"
                  :disabled="!canFinalize"
                  @click="finalizeSale"
                >
                  Finalizar Venda
                </VBtn>
              </VCardActions>
            </VCard>
          </VCol>
        </VRow>
      </VContainer>
    </VMain>

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
  </VApp>
</template>

<script setup>
import Estoque from '@/server/Estoque'
import { computed, onMounted, ref } from 'vue'

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

const finalizeSale = () => {
  showSnackbar('Venda finalizada com sucesso!', 'success')
  clearCart()
  paymentMethod.value = null
  cashAmount.value = ''
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

<style>
.v-list-item {
  border: 1px solid #eee;
  border-radius: 8px;
  margin-block-end: 8px;
}
</style>