<template>
  <div
    class="product-details"
    :hidden="!isOpen"
  >
    <div class="header">
      <h2 class="title">
        Detalhes do Produto
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
              v-model="itemEditado.codigo"
              density="compact"
              variant="outlined"
            />
          </div>
          <div>
            <span class="label">Nome</span>
            <VTextField
              v-model="itemEditado.nome"
              density="compact"
              variant="outlined"
            />
          </div>
          <div>
            <span class="label">Nome Curto</span>
            <VTextField
              v-model="itemEditado.nome_curto"
              density="compact"
              variant="outlined"
            />
          </div>
          <div>
            <span class="label">Grupo/Subgrupo</span>
            <div class="d-flex gap-2">
              <VSelect
                v-model="itemEditado.grupo_id"
                :items="[
                  { id: 'novo', nome: '+ Adicionar Grupo' },
                  ...grupos
                ]"
                item-title="nome"
                item-value="id"
                variant="outlined"
                density="compact"
                class="flex-grow-1"
                @update:model-value="(value) => {                  
                  abrirDialogCadastroGrupo(value)
                  carregarSubGrupos()
                }"
              />
              <VSelect
                v-model="itemEditado.subgrupo_id"
                :items="[
                  { id: 'novo', nome: '+ Adicionar Subgrupo' },
                  ...subgrupos
                ]"
                item-title="nome"
                item-value="id"
                variant="outlined"
                density="compact"
                class="flex-grow-1"
                @update:model-value="(value) => {
                  abrirDialogCadastroSubgrupo(value)
                }"
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
              v-model="itemEditado.custo_compra"
              density="compact"
              variant="outlined"
              type="number"
              step="0.01"
            />
          </div>
          <div>
            <span class="label">Percentual de Lucro</span>
            <VTextField
              v-model="itemEditado.percentual_lucro"
              density="compact"
              variant="outlined"
              type="number"
            />
          </div>
          <div>
            <span class="label">Valor</span>
            <VTextField
              v-model="itemEditado.valor"
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
                v-model="itemEditado.preco_consumidor"
                density="compact"
                variant="outlined"
                type="number"
                step="0.01"
              />
            </div>
            <div>
              <span class="label mb-6">Preço Revenda</span>
              <VTextField
                v-model="itemEditado.preco_revenda"
                density="compact"
                variant="outlined"
                type="number"
                step="0.01"
              />
            </div>
            <div>
              <span class="label mb-6">Outros Preços</span>
              <VTextField
                v-model="itemEditado.preco_outros"
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
              v-model="itemEditado.quantidade_disponivel"
              density="compact"
              variant="outlined"
              type="number"
              readonly
            />
          </div>
          <div>
            <span class="label mb-6">Lote Ideal</span>
            <VTextField
              v-model="itemEditado.lote_ideal"
              density="compact"
              variant="outlined"
              type="number"
            />
          </div>
          <div>
            <span class="label">Quantidade Mínima</span>
            <VTextField
              v-model="itemEditado.quantidade_minima"
              density="compact"
              variant="outlined"
              type="number"
            />
          </div>
        </div>
        <div class="d-flex justify-end mt-4">
          <VBtn
            color="primary"
            variant="outlined"
            prepend-icon="mdi-pencil"
            @click="abrirDialogAjusteQuantidade"
          >
            Atualizar Quantidade
          </VBtn>
        </div>
      </div>
      <div class="info-card">
        <h3 class="section-title">
          Localização e Fabricante
        </h3>
        <div class="location-grid">
          <div>
            <span class="label">Unidade</span>
            <VSelect
              v-model="itemEditado.unidade_id"
              :items="[
                { id: 'novo', nome: '+ Adicionar Unidade' },
                ...unidades
              ]"
              item-title="nome"
              item-value="id"
              density="compact"
              variant="outlined"
              @update:model-value="(value) => {
                abrirDialogCadastroUnidade(value)
              }"
            />
          </div>
          <div>
            <span class="label">Fabricante</span>
            <VSelect
              v-model="itemEditado.fabricante_id"
              :items="[
                { id: 'novo', nome: '+ Adicionar Fabricante' },
                ...fabricantes
              ]"
              item-title="nome"
              item-value="id"
              density="compact"
              variant="outlined"
              @update:model-value="(value) => {
                abrirDialogCadastroFabricante(value)
              }"
            />
          </div>
          <div>
            <span class="label">Local Estoque</span>
            <VSelect
              v-model="itemEditado.local_estoque_id"
              :items="[
                { id: 'novo', nome: '+ Adicionar Local' },
                ...localEstoque
              ]"
              item-title="nome"
              item-value="id"
              density="compact"
              variant="outlined"
              @update:model-value="(value) => {
                abrirDialogCadastroLocalEstoque(value)
              }"
            />
          </div>
          <div>
            <span class="label">Gaveta</span>
            <VTextField
              v-model="itemEditado.gaveta"
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
        v-model="itemEditado.observacoes"
        density="compact"
        variant="outlined"
        rows="3"
      />
    </div>
    <div class="footer">
      <div>
        <span>Data Cadastro: </span><span>{{ itemEditado.data_cadastro }}</span>
      </div>
      <div>
        <span>Última Atualização: </span><span>{{ itemEditado.ultima_atualizacao }}</span>
      </div>
    </div>
    <div class="actions">
      <VBtn
        color="primary"
        @click="salvarAlteracoes"
      >
        Salvar Alterações
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

  <!-- Dialogs de Cadastro -->
  <VDialog
    v-model="dialogCadastroGrupo"
    max-width="500"
  >
    <DialogCadastroGrupo
      :is-open="dialogCadastroGrupo"
      @close="dialogCadastroGrupo = false"
      @cadastro-concluido="carregarGrupos"
    />
  </VDialog>

  <VDialog
    v-model="dialogCadastroSubgrupo"
    max-width="500"
  >
    <DialogCadastroSubgrupo
      :is-open="dialogCadastroSubgrupo"
      @close="dialogCadastroSubgrupo = false"
      @cadastro-concluido="carregarSubGrupos"
    />
  </VDialog>

  <VDialog
    v-model="dialogCadastroUnidade"
    max-width="500"
  >
    <DialogCadastroUnidade
      :is-open="dialogCadastroUnidade"
      @close="dialogCadastroUnidade = false"
      @cadastro-concluido="carregarUnidades"
    />
  </VDialog>

  <VDialog
    v-model="dialogCadastroFabricante"
    max-width="500"
  >
    <DialogCadastroFabricante
      :is-open="dialogCadastroFabricante"
      @close="dialogCadastroFabricante = false"
      @cadastro-concluido="carregarFabricantes"
    />
  </VDialog>

  <VDialog
    v-model="dialogCadastroLocalEstoque"
    max-width="500"
  >
    <DialogCadastroLocalEstoque
      :is-open="dialogCadastroLocalEstoque"
      @close="dialogCadastroLocalEstoque = false"
      @cadastro-concluido="carregarLocalEstoque"
    />
  </VDialog>

  <!-- Dialog de Ajuste de Quantidade -->
  <VDialog
    v-model="dialogAjusteQuantidade"
    max-width="400"
  >
    <VCard>
      <VCardTitle>Ajustar Quantidade</VCardTitle>
      <VCardText>
        <div class="d-flex align-center mb-4">
          <span class="text-subtitle-1 mr-4">Quantidade Atual:</span>
          <span class="text-h6">{{ itemEditado.quantidade_disponivel }}</span>
        </div>
        <VTextField
          v-model.number="quantidadeAjuste"
          label="Quantidade para Ajuste"
          type="number"
          density="compact"
          variant="outlined"
          class="mb-4"
        />
        <VRadioGroup
          v-model="tipoAjuste"
          class="mb-4"
        >
          <VRadio
            value="adicionar"
            label="Adicionar"
          />
          <VRadio
            value="remover"
            label="Remover"
          />
        </VRadioGroup>
        <div class="d-flex align-center">
          <span class="text-subtitle-1 mr-4">Quantidade Final:</span>
          <span
            class="text-h6"
            :class="{'text-error': quantidadeFinal < 0}"
          >
            {{ quantidadeFinal }}
          </span>
        </div>
      </VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn
          color="primary"
          :disabled="quantidadeFinal < 0"
          @click="aplicarAjusteQuantidade"
        >
          Aplicar
        </VBtn>
        <VBtn
          variant="outlined"
          @click="dialogAjusteQuantidade = false"
        >
          Cancelar
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup>
import estoque from '@/server/Estoque'
import { computed, ref } from 'vue'
import DialogCadastroFabricante from './DialogCadastroFabricante.vue'
import DialogCadastroGrupo from './DialogCadastroGrupo.vue'
import DialogCadastroLocalEstoque from './DialogCadastroLocalEstoque.vue'
import DialogCadastroSubgrupo from './DialogCadastroSubgrupo.vue'
import DialogCadastroUnidade from './DialogCadastroUnidade.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  item: {
    type: Object,
    required: true,
    default: () => ({
      codigo: "ABC123",
      nome: "Pastilha de Freio Dianteira",
      nome_curto: "Pastilha Freio",
      grupo_id: "01",
      subgrupo_id: "02",
      custo_compra: 89.9,
      percentual_lucro: 35,
      valor: 121.37,
      preco_consumidor: 149.9,
      preco_revenda: 129.9,
      preco_outros: 139.9,
      quantidade_disponivel: 15,
      lote_ideal: 20,
      quantidade_minima: 5,
      unidade_id: "PC",
      fabricante_id: "FRAS-LE",
      local_estoque_id: "A1",
      gaveta: "G3",
      observacoes: "Compatível com modelos 2018-2023",
      data_cadastro: "2023-01-15",
      ultima_atualizacao: "2023-11-28"
    })
  }
})

const emit = defineEmits(['update:item', 'close'])

// Cria uma cópia editável do item
const itemEditado = ref({ ...props.item })

// Estado do snackbar
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')
const grupos = ref([])
const subgrupos = ref([])
const unidades = ref([])
const fabricantes = ref([])
const localEstoque = ref([])
const dialogCadastroGrupo = ref(false)
const dialogCadastroSubgrupo = ref(false)
const dialogCadastroUnidade = ref(false)
const dialogCadastroFabricante = ref(false)
const dialogCadastroLocalEstoque = ref(false)
const dialogAjusteQuantidade = ref(false)
const quantidadeAjuste = ref(0)
const tipoAjuste = ref('adicionar')

// Computed para calcular a quantidade final
const quantidadeFinal = computed(() => {
  const ajuste = tipoAjuste.value === 'adicionar' 
    ? quantidadeAjuste.value 
    : -quantidadeAjuste.value
  
  return itemEditado.value.quantidade_disponivel + ajuste
})

const abrirDialogCadastroGrupo = value => {
  console.log('abrirDialogCadastroGrupo', value)
  if (value === 'novo') {
    dialogCadastroGrupo.value = true
  }
}

const abrirDialogCadastroSubgrupo = value => {
  console.log('abrirDialogCadastroSubgrupo', value)
  if (value === 'novo') {
    dialogCadastroSubgrupo.value = true
  }
}

const abrirDialogCadastroUnidade = value => {
  console.log('abrirDialogCadastroUnidade', value)
  if (value === 'novo') {
    dialogCadastroUnidade.value = true
  }
}

const abrirDialogCadastroFabricante = value => {
  console.log('abrirDialogCadastroFabricante', value)
  if (value === 'novo') {
    dialogCadastroFabricante.value = true
  }
}

const abrirDialogCadastroLocalEstoque = value => {
  console.log('abrirDialogCadastroLocalEstoque', value)
  if (value === 'novo') {
    dialogCadastroLocalEstoque.value = true
  }
}

const abrirDialogAjusteQuantidade = () => {
  quantidadeAjuste.value = 0
  tipoAjuste.value = 'adicionar'
  dialogAjusteQuantidade.value = true
}

// Função para formatar valores monetários
const formatarPreco = preco => {
  return `R$ ${parseFloat(preco)}`
}

// Busca os grupos ao abrir o dialog
const carregarGrupos = async () => {
  console.log('carregando grupos')
  try {
    const response = await estoque.listarGrupos()
     
    if (response && response.data) {
      grupos.value = response.data.map(grupo => ({
        id: grupo.id,
        nome: grupo.nome
      }))
    } else {
      console.error('Dados recebidos inválidos:', response)
      grupos.value = []
    }
      
  } catch (error) {
    console.error('Erro ao carregar grupos:', error)
    snackbarText.value = 'Erro ao carregar grupos. Tente novamente.'
    snackbarColor.value = 'error'
    snackbar.value = true
    grupos.value = []
  }
}

const carregarSubGrupos = async () => {
  try {
    subgrupos.value = []
    console.log('carregando subgrupos', itemEditado.value.grupo_id)
    const response = await estoque.listarSubgrupos(itemEditado.value.grupo_id)
    if (response && response.data) {
      subgrupos.value = response.data.map(subgrupo => ({
        id: subgrupo.id,
        nome: subgrupo.nome 
      }))
    } else {
      console.error('Dados recebidos inválidos:', response)
      subgrupos.value = []
    }
  } catch (error) {
    console.error('Erro ao carregar grupos:', error)
    snackbarText.value = 'Erro ao carregar grupos. Tente novamente.'
    snackbarColor.value = 'error'
    snackbar.value = true
    grupos.value = []
  }
}

const carregarUnidades = async () => {
  try {
    const response = await estoque.listarUnidades()
    if (response && response.data) {
      unidades.value = response.data.map(unidades => ({
        id: unidades.id,
        nome: unidades.nome 
      }))
    } else {
      console.error('Dados recebidos inválidos:', response)
      subgrupos.value = []
    }
  } catch (error) {
    console.error('Erro ao carregar grupos:', error)
    snackbarText.value = 'Erro ao carregar grupos. Tente novamente.'
    snackbarColor.value = 'error'
    snackbar.value = true
    grupos.value = []
  }
}

const carregarFabricantes = async () => {
  try {
    const response = await estoque.listarFabricantes()
    if (response && response.data) {
      fabricantes.value = response.data.map(fabricantes => ({
        id: fabricantes.id,
        nome: fabricantes.nome 
      }))
    } else {
      console.error('Dados recebidos inválidos:', response)
      subgrupos.value = []
    }
  } catch (error) {
    console.error('Erro ao carregar grupos:', error)
    snackbarText.value = 'Erro ao carregar grupos. Tente novamente.'
    snackbarColor.value = 'error'
    snackbar.value = true
    grupos.value = []
  }
}

const carregarLocalEstoque = async () => {
  try {
    const response = await estoque.listarLocalEstoque()
    if (response && response.data) {
      localEstoque.value = response.data.map(localEstoque => ({
        id: localEstoque.id,
        nome: localEstoque.nome 
      }))
    } else {
      console.error('Dados recebidos inválidos:', response)
      subgrupos.value = []
    }
  } catch (error) {
    console.error('Erro ao carregar grupos:', error)
    snackbarText.value = 'Erro ao carregar grupos. Tente novamente.'
    snackbarColor.value = 'error'
    snackbar.value = true
    grupos.value = []
  }
}

const aplicarAjusteQuantidade = async () => {
  if (quantidadeFinal.value < 0) {
    snackbarText.value = 'A quantidade não pode ficar negativa!'
    snackbarColor.value = 'error'
    snackbar.value = true
    
    return
  }

  try {
    await estoque.atualizarEstoque(itemEditado.value.id, {
      quantidade: quantidadeAjuste.value,
      operacao: tipoAjuste.value === 'adicionar' ? 'adicionar' : 'remover'
    })

    // Atualiza o valor na tela
    itemEditado.value.quantidade_disponivel = quantidadeFinal.value
    dialogAjusteQuantidade.value = false
    
    snackbarText.value = 'Quantidade ajustada com sucesso!'
    snackbarColor.value = 'success'
    snackbar.value = true
  } catch (error) {
    console.error('Erro ao ajustar quantidade:', error)
    snackbarText.value = 'Erro ao ajustar quantidade. Tente novamente.'
    snackbarColor.value = 'error'
    snackbar.value = true
  }
}

// Executa carregarGrupos quando o componente é montado
onBeforeMount(() => {
  carregarGrupos() 
  carregarSubGrupos()
  carregarUnidades()
  carregarFabricantes()
  carregarLocalEstoque()
})

// Função para salvar as alterações
const salvarAlteracoes = async () => {
  try {
    await estoque.atualizarItem(itemEditado.value.id, itemEditado.value)
    snackbarText.value = 'Item atualizado com sucesso!'
    snackbarColor.value = 'success'
    snackbar.value = true
    emit('update:item', itemEditado.value)
    setTimeout(() => {
      emit('close')
    }, 2000)
  } catch (error) {
    console.error('Erro ao salvar alterações:', error)
    snackbarText.value = 'Erro ao atualizar item. Tente novamente.'
    snackbarColor.value = 'error'
    snackbar.value = true
  }
}
</script>

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

.observation-text {
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 6px;
  color: #1a1a1a;
  font-size: 15px;
}

.footer {
  display: flex;
  justify-content: space-between;
  border-color: #e5e5e5;
  border-block-start-width: 1px;
  color: #64748b;
  font-size: 14px;
  margin-block-start: 24px;
  padding-block-start: 16px;
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
