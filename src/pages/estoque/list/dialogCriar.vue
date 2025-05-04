<script setup>
import estoque from '@/server/Estoque'
import { ref } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  }
})

const emit = defineEmits(['close'])

// Estado do snackbar
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')

// Cria um novo item vazio
const novoItem = ref({
  codigo: "",
  nome: "",
  nome_curto: "",
  grupo_id: "",
  subgrupo_id: "",
  custo_compra: 0,
  percentual_lucro: 0,
  valor: 0,
  preco_consumidor: 0,
  preco_revenda: 0,
  preco_outros: 0,
  quantidade_disponivel: 0,
  lote_ideal: 0,
  quantidade_minima: 0,
  unidade_id: "",
  fabricante_id: "",
  local_estoque_id: "",
  gaveta: "",
  observacoes: ""
})

// Função para formatar valores monetários
const formatarPreco = preco => {
  return `R$ ${parseFloat(preco)}`
}

// Função para criar o item
const criarItem = async () => {
  try {
    await estoque.criarItem(novoItem.value)
    snackbarText.value = 'Item criado com sucesso!'
    snackbarColor.value = 'success'
    snackbar.value = true
    setTimeout(() => {
      emit('close')
    }, 2000)
  } catch (error) {
    console.error('Erro ao criar item:', error)
    snackbarText.value = 'Erro ao criar item. Tente novamente.'
    snackbarColor.value = 'error'
    snackbar.value = true
  }
}
</script>

<template>
  <div
    class="product-details"
    :hidden="!isOpen"
  >
    <div class="header">
      <h2 class="title">
        Novo Item
      </h2>
    </div>
    <div class="info-grid">
      <div class="info-card">
        <h3 class="section-title">
          Informações Básicas
        </h3>
        <div class="info-list">
          <div>
            <span class="label">Código</span>
            <VTextField
              v-model="novoItem.codigo"
              density="compact"
              variant="outlined"
            />
          </div>
          <div>
            <span class="label">Nome</span>
            <VTextField
              v-model="novoItem.nome"
              density="compact"
              variant="outlined"
            />
          </div>
          <div>
            <span class="label">Nome Curto</span>
            <VTextField
              v-model="novoItem.nome_curto"
              density="compact"
              variant="outlined"
            />
          </div>
          <div>
            <span class="label">Grupo/Subgrupo</span>
            <div class="d-flex gap-2">
              <VTextField
                v-model="novoItem.grupo_id"
                density="compact"
                variant="outlined"
                class="flex-grow-1"
              />
              <VTextField
                v-model="novoItem.subgrupo_id"
                density="compact"
                variant="outlined"
                class="flex-grow-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="info-card">
        <h3 class="section-title">
          Informações de Preço
        </h3>
        <div class="info-list">
          <div>
            <span class="label">Custo de Compra</span>
            <VTextField
              v-model="novoItem.custo_compra"
              density="compact"
              variant="outlined"
              type="number"
              step="0.01"
            />
          </div>
          <div>
            <span class="label">Percentual de Lucro</span>
            <VTextField
              v-model="novoItem.percentual_lucro"
              density="compact"
              variant="outlined"
              type="number"
            />
          </div>
          <div>
            <span class="label">Valor</span>
            <VTextField
              v-model="novoItem.valor"
              density="compact"
              variant="outlined"
              type="number"
              step="0.01"
            />
          </div>
          <div class="price-grid">
            <div>
              <span class="label">Preço Consumidor</span>
              <VTextField
                v-model="novoItem.preco_consumidor"
                density="compact"
                variant="outlined"
                type="number"
                step="0.01"
              />
            </div>
            <div>
              <span class="label">Preço Revenda</span>
              <VTextField
                v-model="novoItem.preco_revenda"
                density="compact"
                variant="outlined"
                type="number"
                step="0.01"
              />
            </div>
            <div>
              <span class="label">Outros Preços</span>
              <VTextField
                v-model="novoItem.preco_outros"
                density="compact"
                variant="outlined"
                type="number"
                step="0.01"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="info-card">
        <h3 class="section-title">
          Estoque
        </h3>
        <div class="stock-grid">
          <div>
            <span class="label">Quantidade Disponível</span>
            <VTextField
              v-model="novoItem.quantidade_disponivel"
              density="compact"
              variant="outlined"
              type="number"
            />
          </div>
          <div>
            <span class="label">Lote Ideal</span>
            <VTextField
              v-model="novoItem.lote_ideal"
              density="compact"
              variant="outlined"
              type="number"
            />
          </div>
          <div>
            <span class="label">Quantidade Mínima</span>
            <VTextField
              v-model="novoItem.quantidade_minima"
              density="compact"
              variant="outlined"
              type="number"
            />
          </div>
        </div>
      </div>
      <div class="info-card">
        <h3 class="section-title">
          Localização e Fabricante
        </h3>
        <div class="location-grid">
          <div>
            <span class="label">Unidade</span>
            <VTextField
              v-model="novoItem.unidade_id"
              density="compact"
              variant="outlined"
            />
          </div>
          <div>
            <span class="label">Fabricante</span>
            <VTextField
              v-model="novoItem.fabricante_id"
              density="compact"
              variant="outlined"
            />
          </div>
          <div>
            <span class="label">Local Estoque</span>
            <VTextField
              v-model="novoItem.local_estoque_id"
              density="compact"
              variant="outlined"
            />
          </div>
          <div>
            <span class="label">Gaveta</span>
            <VTextField
              v-model="novoItem.gaveta"
              density="compact"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="observations">
      <h3 class="section-title">
        Observações
      </h3>
      <VTextarea
        v-model="novoItem.observacoes"
        density="compact"
        variant="outlined"
        rows="3"
      />
    </div>
    <div class="actions">
      <VBtn
        color="primary"
        @click="criarItem"
      >
        Criar Item
      </VBtn>
      <VBtn
        variant="outlined"
        @click="$emit('close')"
      >
        Cancelar
      </VBtn>
    </div>
  </div>

  <!-- Snackbar para mensagens -->
  <VSnackbar
    v-model="snackbar"
    :color="snackbarColor"
    location="bottom"
    timeout="2000"
  >
    {{ snackbarText }}
  </VSnackbar>
</template>

<style scoped>
.product-details {
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 10%);
  inline-size: 800px;
  max-block-size: 90vh;
  overflow-y: auto;
}

@media (max-width: 640px) {
  .product-details {
    inline-size: 95%;
    margin-block: 16px;
    margin-inline: auto;
    max-block-size: 85vh;
  }
}

.header {
  border-color: #e5e5e5;
  border-block-end-width: 1px;
  margin-block-end: 24px;
  padding-block-end: 16px;
}

.title {
  color: #1a1a1a;
  font-size: 24px;
  font-weight: 700;
}

.info-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 640px) {
  .info-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

.info-card {
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 6px;
}

.section-title {
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
  margin-block-end: 16px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.label {
  display: block;
  color: #64748b;
  font-size: 14px;
  font-weight: 500;
  margin-block-end: 4px;
}

.price-grid {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.stock-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.location-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.observations {
  margin-block-start: 24px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  border-color: #e5e5e5;
  border-block-start-width: 1px;
  gap: 12px;
  margin-block-start: 24px;
  padding-block-start: 16px;
}
</style> 
