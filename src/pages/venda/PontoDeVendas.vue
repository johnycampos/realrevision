<template>
  <VContainer fluid>
    <VRow>
      <!-- Área de Itens do Pedido -->
      <VCol cols="8">
        <VAutocomplete
          v-model="itemSelecionado"
          v-model:search-input="buscaTexto"
          :items="itensEstoque"
          item-title="nome"
          item-value="codigo"
          label="Código de barras, código, referência ou descrição do item..."
          append-inner-icon="mdi-magnify"
          variant="outlined"
          density="compact"
          class="mb-4"
          :filter="(item, queryText) => {
            const termo = queryText.toLowerCase()
            return (
              item.nome?.toLowerCase().includes(termo) ||
              item.codigo?.toLowerCase().includes(termo)
            )
          }"
          @update:model-value="adicionarItemSelecionado"
        />

        <VTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Código</th>
              <th>Descrição do item</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>D</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="itensPedido.length === 0">
              <td
                colspan="7"
                class="text-center text-grey"
              >
                <strong>Nenhum item no pedido</strong>
              </td>
            </tr>
            <tr
              v-for="(item, idx) in itensPedido"
              :key="item.codigo"
            >
              <td>{{ idx + 1 }}</td>
              <td>{{ item.codigo }}</td>
              <td>{{ item.nome }}</td>
              <td>
                <VTextField
                  v-model.number="item.quantidade"
                  type="number"
                  min="1"
                  density="compact"
                  style="max-width: 60px;"
                  @change="atualizarTotalItem(item)"
                />
              </td>
              <td>R$ {{ Number(item.valor_unitario).toFixed(2) }}</td>
              <td>
                <VBtn
                  icon
                  size="x-small"
                  @click="removerItem(idx)"
                >
                  <VIcon>mdi-delete</VIcon>
                </VBtn>
              </td>
              <td>R$ {{ (item.quantidade * item.valor_unitario).toFixed(2) }}</td>
            </tr>
          </tbody>
        </VTable>
      </VCol>

      <!-- Área de Resumo e Pagamento -->
      <VCol cols="4">
        <VCard class="mb-4">
          <VCardText>
            <div class="d-flex justify-space-between align-center">
              <span class="font-weight-bold">Total geral</span>
              <span class="font-weight-bold text-h5">R$ {{ totalGeral.toFixed(2) }}</span>
            </div>
            <div class="d-flex align-center mt-2">
              <VTextField
                v-model.number="desconto"
                label="%"
                type="number"
                density="compact"
                style="max-width: 60px;"
                @change="calcularTotais"
              />
              <span class="mx-2">ou</span>
              <VTextField
                v-model.number="descontoReais"
                label="R$"
                type="number"
                density="compact"
                style="max-width: 80px;"
                @change="calcularTotais"
              />
            </div>
            <div class="mt-2">
              Total pago <span class="float-right">R$ {{ totalPago.toFixed(2) }}</span>
            </div>
            <div>Saldo final <span class="float-right">R$ {{ saldoFinal.toFixed(2) }}</span></div>
            <VBtn
              block
              color="success"
              class="mt-4"
              :disabled="itensPedido.length === 0"
              @click="abrirVenda"
            >
              <VIcon left>
                mdi-check
              </VIcon> Abrir venda
            </VBtn>
            <VBtn
              block
              color="error"
              class="mt-2"
              :disabled="itensPedido.length === 0"
              @click="fecharVenda"
            >
              <VIcon left>
                mdi-close
              </VIcon> Fechar venda
            </VBtn>
          </VCardText>
        </VCard>

        <VCard class="mb-4">
          <VCardText>
            <div class="mb-2">
              Vendedor
            </div>
            <VSelect
              v-model="vendedor"
              :items="vendedores"
              item-title="nome"
              item-value="id"
              label="Nenhum vendedor"
              density="compact"
              variant="outlined"
              append-inner-icon="mdi-refresh"
              @click:append-inner="carregarVendedores"
            />
          </VCardText>
        </VCard>

        <VCard>
          <VCardText>
            <VBtn
              block
              color="primary"
              class="mb-2"
              @click="abrirDialogPagamento"
            >
              <VIcon left>
                mdi-plus
              </VIcon> Novo pagamento
            </VBtn>
            <div class="mb-2 font-weight-bold">
              Pagamentos <VIcon
                small
                color="grey"
              >
                mdi-information
              </VIcon>
            </div>
            <VTable>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Forma</th>
                  <th>Parcelas</th>
                  <th>Valor Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="pagamentos.length === 0">
                  <td
                    colspan="4"
                    class="text-center text-grey"
                  >
                    <strong>Nenhum pagamento adicionado</strong>
                  </td>
                </tr>
                <tr
                  v-for="(pag, idx) in pagamentos"
                  :key="idx"
                >
                  <td>{{ idx + 1 }}</td>
                  <td>{{ pag.forma }}</td>
                  <td>{{ pag.parcelas }}</td>
                  <td>R$ {{ pag.valor.toFixed(2) }}</td>
                </tr>
              </tbody>
            </VTable>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <!-- Dialog de Pagamento -->
    <VDialog
      v-model="dialogPagamento"
      max-width="400"
    >
      <VCard>
        <VCardTitle>Adicionar Pagamento</VCardTitle>
        <VCardText>
          <VSelect
            v-model="pagamentoAtual.forma"
            :items="formasPagamento"
            label="Forma de pagamento"
            density="compact"
            variant="outlined"
          />
          <VTextField
            v-model.number="pagamentoAtual.valor"
            label="Valor"
            type="number"
            density="compact"
            variant="outlined"
            class="mt-2"
          />
          <VTextField
            v-model.number="pagamentoAtual.parcelas"
            label="Parcelas"
            type="number"
            density="compact"
            variant="outlined"
            class="mt-2"
            :disabled="pagamentoAtual.forma !== 'Cartão de Crédito'"
          />
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn
            color="primary"
            @click="adicionarPagamento"
          >
            Adicionar
          </VBtn>
          <VBtn
            variant="outlined"
            @click="dialogPagamento = false"
          >
            Cancelar
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VContainer>
</template>

<script setup>
import estoque from '@/server/Estoque'
import { computed, onMounted, ref } from 'vue'

// Busca e itens do pedido
const itemSelecionado = ref(null)
const buscaTexto = ref('')
const itensPedido = ref([])

// Itens do estoque
const itensEstoque = ref([])

// Carregar itens do estoque ao montar
onMounted(async () => {
  try {
    const response = await estoque.listarItens()
    console.log(response)

    // Supondo que os itens vêm em response.data
    itensEstoque.value = response.data || []
  } catch (e) {
    itensEstoque.value = []
  }
})

// Resumo e descontos
const desconto = ref(0)
const descontoReais = ref(0)
const totalGeral = computed(() => {
  let total = itensPedido.value.reduce((acc, item) => acc + item.quantidade * item.valor_unitario, 0)
  if (desconto.value > 0) {
    total -= total * (desconto.value / 100)
  } else if (descontoReais.value > 0) {
    total -= descontoReais.value
  }
  
  return total > 0 ? total : 0
})

// Pagamentos
const pagamentos = ref([])
const totalPago = computed(() => pagamentos.value.reduce((acc, pag) => acc + pag.valor, 0))
const saldoFinal = computed(() => totalGeral.value - totalPago.value)

// Vendedores
const vendedor = ref(null)
const vendedores = ref([
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' }
])
function carregarVendedores() {
  // Aqui você pode buscar os vendedores do backend
}

// Formas de pagamento
const formasPagamento = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito', 'Pix', 'Boleto']

// Dialog de pagamento
const dialogPagamento = ref(false)
const pagamentoAtual = ref({ forma: '', valor: 0, parcelas: 1 })

function abrirDialogPagamento() {
  pagamentoAtual.value = { forma: '', valor: 0, parcelas: 1 }
  dialogPagamento.value = true
}
function adicionarPagamento() {
  if (pagamentoAtual.value.valor > 0 && pagamentoAtual.value.forma) {
    pagamentos.value.push({ ...pagamentoAtual.value })
    dialogPagamento.value = false
  }
}

// Funções de itens
function adicionarItemSelecionado(item) {
  if (!item || !item.codigo) return

  // Verifica se já está no pedido
  const jaAdicionado = itensPedido.value.find(i => i.codigo === item.codigo)
  if (jaAdicionado) {
    jaAdicionado.quantidade += 1
  } else {
    itensPedido.value.push({
      codigo: item.codigo,
      nome: item.nome,
      nome_curto: item.nome_curto,
      grupo_id: item.grupo_id,
      subgrupo_id: item.subgrupo_id,
      quantidade: 1,
      valor_unitario: Number(item.preco_consumidor),
      quantidade_disponivel: item.quantidade_disponivel,
      unidade_id: item.unidade_id,
      fabricante_id: item.fabricante_id,
      local_estoque_id: item.local_estoque_id,
      gaveta: item.gaveta,
      observacoes: item.observacoes
    })
  }
  itemSelecionado.value = null
  buscaTexto.value = ''
}
function atualizarTotalItem(item) {
  if (item.quantidade < 1) item.quantidade = 1
}
function removerItem(idx) {
  itensPedido.value.splice(idx, 1)
}

// Ações de venda
function abrirVenda() {
  // Lógica para abrir venda
}
function fecharVenda() {
  // Lógica para fechar venda
}
function calcularTotais() {
  // Apenas força o recálculo dos computeds
}
</script>

<style scoped>
.text-grey {
  color: #888;
}
</style>