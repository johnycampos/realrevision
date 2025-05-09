<template>
  <VContainer fluid>
    <VRow>
      <VCol
        cols="12"
        md="8"
      >
        <VCard
          elevation="4"
          rounded="lg"
        >
          <VCardTitle class="text-h5 font-weight-bold primary--text">
            Itens da Venda
          </VCardTitle>
          <VCardText>
            <VRow>
              <VCol cols="12">
                <VTextField
                  v-model="searchItem"
                  label="Buscar Item"
                  variant="outlined"
                  density="compact"
                  prepend-inner-icon="mdi-magnify"
                  clearable
                />
              </VCol>
            </VRow>
            <VList v-if="filteredItems.length > 0">
              <VListItem
                v-for="(item, index) in filteredItems"
                :key="index"
                link
                @click="addItemToSale(item)"
              >
                <VListItemContent>
                  <VListItemTitle class="font-weight-bold">
{{ item.nome }}
</VListItemTitle>
                  <VListItemSubtitle>R$ {{ item.preco.toFixed(2) }} - Estoque: {{ item.estoque }}</VListItemSubtitle>
                </VListItemContent>
              </VListItem>
            </VList>
            <div
              v-else
              class="text-center mt-4"
            >
              Nenhum item encontrado.
            </div>
          </VCardText>
        </VCard>

        <VCard
          class="mt-6"
          elevation="4"
          rounded="lg"
        >
          <VCardTitle class="text-h5 font-weight-bold primary--text">
            Itens Adicionados
          </VCardTitle>
          <VCardText>
            <VTable density="compact">
              <thead>
                <tr>
                  <th class="text-left">
                    Item
                  </th>
                  <th class="text-left">
                    Preço Unitário
                  </th>
                  <th class="text-center">
                    Quantidade
                  </th>
                  <th class="text-right">
                    Subtotal
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(itemVenda, index) in saleItems"
                  :key="index"
                >
                  <td>{{ itemVenda.nome }}</td>
                  <td>R$ {{ itemVenda.preco.toFixed(2) }}</td>
                  <td class="text-center">
                    <VBtn
                      icon
                      size="small"
                      color="secondary"
@click="decreaseQuantity(index)"
                    >
                      <VIcon>mdi-minus</VIcon>
                    </VBtn>
                    <span class="mx-2">{{ itemVenda.quantidade }}</span>
                    <VBtn
                      icon
                      size="small"
                      color="primary"
@click="increaseQuantity(index)"
                    >
                      <VIcon>mdi-plus</VIcon>
                    </VBtn>
                  </td>
                  <td class="text-right">
                    R$ {{ (itemVenda.preco * itemVenda.quantidade).toFixed(2) }}
                  </td>
                  <td class="text-right">
                    <VBtn
                      icon
                      color="error"
                      size="small"
@click="removeItemFromSale(index)"
                    >
                      <VIcon>mdi-delete</VIcon>
                    </VBtn>
                  </td>
                </tr>
              </tbody>
            </VTable>

            <div class="text-right mt-4">
              <strong class="mr-2">Subtotal:</strong> R$ {{ subtotal.toFixed(2) }}
            </div>
            <VRow class="mt-2">
              <VCol cols="6">
                <VTextField
                  v-model="discountPercentage"
                  label="Desconto (%)"
                  type="number"
                  min="0"
                  max="100"
                  variant="outlined"
                  density="compact"
                  @input="applyDiscount"
                />
              </VCol>
              <VCol cols="6">
                <VTextField
                  v-model="discountValue"
                  label="Desconto (R$)"
                  type="number"
                  min="0"
                  variant="outlined"
                  density="compact"
                  @input="applyDiscountValue"
                />
              </VCol>
            </VRow>
            <div class="text-right mt-2">
              <strong class="mr-2">Total com Desconto:</strong> R$ {{ totalWithDiscount.toFixed(2) }}
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        cols="12"
        md="4"
      >
        <VCard
          elevation="4"
          rounded="lg"
        >
          <VCardTitle class="text-h5 font-weight-bold primary--text">
            Pagamento
          </VCardTitle>
          <VCardText>
            <VRadioGroup
              v-model="paymentMethod"
              label="Forma de Pagamento"
            >
              <VRadio
                label="Dinheiro"
                value="dinheiro"
              />
              <VRadio
                label="Cartão de Crédito"
                value="credito"
              />
              <VRadio
                label="Cartão de Débito"
                value="debito"
              />
              <VRadio
                label="Pix"
                value="pix"
              />
            </VRadioGroup>

            <VTextField
              v-if="paymentMethod === 'dinheiro'"
              v-model="amountPaid"
              label="Valor Recebido"
              type="number"
              variant="outlined"
              density="compact"
            />

            <div
              v-if="paymentMethod === 'dinheiro' && amountPaid >= totalWithDiscount"
              class="mt-2"
            >
              <strong>Troco:</strong> R$ {{ (amountPaid - totalWithDiscount).toFixed(2) }}
            </div>

            <VBtn
              class="mt-4"
              color="success"
              variant="flat"
              :disabled="saleItems.length === 0 || !paymentMethod"
              :loading="isFinalizingSale"
              block
              rounded="lg"
              @click="finalizeSale"
            >
              Finalizar Venda
              <VIcon right>
                mdi-check-circle-outline
              </VIcon>
            </VBtn>

            <VSnackbar
              v-model="snackbar.show"
              :color="snackbar.color"
              :timeout="3000"
              :text="snackbar.message"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { computed, ref } from 'vue'

// Dados de exemplo do estoque (simulando uma API ou banco de dados)
const stockItems = ref([
  { id: 1, nome: 'Produto A', preco: 10.00, estoque: 50 },
  { id: 2, nome: 'Produto B', preco: 25.50, estoque: 30 },
  { id: 3, nome: 'Produto C', preco: 5.20, estoque: 100 },

  // Adicione mais itens conforme necessário
])

const searchItem = ref('')
const saleItems = ref([])
const paymentMethod = ref('')
const amountPaid = ref(0)
const discountPercentage = ref(0)
const discountValue = ref(0)
const isFinalizingSale = ref(false)
const snackbar = ref({ show: false, message: '', color: '' })

const filteredItems = computed(() => {
  return stockItems.value.filter(item =>
    item.nome.toLowerCase().includes(searchItem.value.toLowerCase())
  )
})

const subtotal = computed(() => {
  return saleItems.value.reduce((total, item) => total + item.preco * item.quantidade, 0)
})

const totalWithDiscount = computed(() => {
  const discount = discountPercentage.value / 100 * subtotal.value + parseFloat(discountValue.value)
  
  return Math.max(0, subtotal.value - discount) // Garante que o total não seja negativo
})

const addItemToSale = item => {
  const existingItem = saleItems.value.find(saleItem => saleItem.id === item.id)
  if (existingItem && existingItem.quantidade < stockItems.value.find(stockItem => stockItem.id === item.id).estoque) {
    existingItem.quantidade++
  } else if (!existingItem && stockItems.value.find(stockItem => stockItem.id === item.id).estoque > 0) {
    saleItems.value.push({ ...item, quantidade: 1 })
  } else {
    showSnackbar('Item fora de estoque!', 'warning')
  }
}

const removeItemFromSale = index => {
  saleItems.value.splice(index, 1)
  resetDiscount()
}

const increaseQuantity = index => {
  const itemVenda = saleItems.value[index]
  const estoqueItem = stockItems.value.find(item => item.id === itemVenda.id)
  if (itemVenda.quantidade < estoqueItem.estoque) {
    itemVenda.quantidade++
  } else {
    showSnackbar(`Estoque limitado para ${itemVenda.nome}!`, 'warning')
  }
}

const decreaseQuantity = index => {
  if (saleItems.value[index].quantidade > 1) {
    saleItems.value[index].quantidade--
  }
}

const applyDiscount = () => {
  discountValue.value = 0 // Reseta o desconto em valor ao aplicar por porcentagem
}

const applyDiscountValue = () => {
  discountPercentage.value = 0 // Reseta o desconto em porcentagem ao aplicar por valor
}

const resetDiscount = () => {
  discountPercentage.value = 0
  discountValue.value = 0
}

const finalizeSale = async () => {
  if (saleItems.value.length === 0) {
    showSnackbar('Adicione itens à venda!', 'error')
    
    return
  }

  if (!paymentMethod.value) {
    showSnackbar('Selecione uma forma de pagamento!', 'error')
    
    return
  }

  if (paymentMethod.value === 'dinheiro' && amountPaid.value < totalWithDiscount.value) {
    showSnackbar('Valor pago é insuficiente!', 'error')
    
    return
  }

  isFinalizingSale.value = true

  // Simulação de processamento da venda (você substituirá isso pela sua lógica real)
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Atualizar o estoque (simulação)
  saleItems.value.forEach(itemVenda => {
    const estoqueItem = stockItems.value.find(item => item.id === itemVenda.id)
    if (estoqueItem) {
      estoqueItem.estoque -= itemVenda.quantidade
    }
  })

  showSnackbar('Venda finalizada com sucesso!', 'success')
  saleItems.value = []
  paymentMethod.value = ''
  amountPaid.value = 0
  resetDiscount()
  isFinalizingSale.value = false
}

const showSnackbar = (message, color) => {
  snackbar.value.message = message
  snackbar.value.color = color
  snackbar.value.show = true
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>