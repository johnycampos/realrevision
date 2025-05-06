<template>
  <div class="dialog-cadastro">
    <div class="header">
      <h2 class="title">
        Novo Subgrupo
      </h2>
    </div>

    <div class="content">
      <VTextField
        v-model="novoSubgrupo.nome"
        label="Nome do Subgrupo"
        variant="outlined"
        density="compact"
        class="mb-4"
      />
    </div>
    <div class="content">
      <VTextField
        v-model="novoSubgrupo.descricao"
        label="Descrição do Subgrupo"
        variant="outlined"
        density="compact"
        class="mb-4"
      />
    </div>
    <div class="content">
      <VSelect
        v-model="novoSubgrupo.grupo_id"
        :items="grupos"
        item-title="nome"
        item-value="id"
        label="Grupo"
        variant="outlined"
        density="compact"
        class="mb-4"
      />
    </div>

    <div class="actions">
      <VBtn
        color="primary"
        :loading="isLoading"
        @click="salvarSubgrupo"
      >
        Salvar
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

<script setup>
import estoque from '@/server/Estoque'
import { onMounted, ref } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  }
})

const emit = defineEmits(['close', 'cadastroConcluido'])

const novoSubgrupo = ref({
  nome: '',
  descricao: '',
  grupo_id: null
})

const grupos = ref([])
const isLoading = ref(false)
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')

// Função para carregar os grupos
const carregarGrupos = async () => {
  try {
    const response = await estoque.listarGrupos()
    if (response && response.data) {
      grupos.value = response.data
    }
  } catch (error) {
    console.error('Erro ao carregar grupos:', error)
    snackbarText.value = 'Erro ao carregar grupos. Tente novamente.'
    snackbarColor.value = 'error'
    snackbar.value = true
  }
}

// Carrega os grupos quando o componente é montado
onMounted(() => {
  carregarGrupos()
})

const salvarSubgrupo = async () => {
  try {
    isLoading.value = true
    await estoque.criarSubgrupo(novoSubgrupo.value)
    
    snackbarText.value = 'Subgrupo criado com sucesso!'
    snackbarColor.value = 'success'
    snackbar.value = true
    
    // Limpa o formulário
    novoSubgrupo.value.nome = ''
    novoSubgrupo.value.descricao = ''
    novoSubgrupo.value.grupo_id = null
    
    // Notifica o componente pai
    emit('cadastroConcluido')
    
    // Fecha o dialog após 2 segundos
    setTimeout(() => {
      emit('close')
    }, 2000)
  } catch (error) {
    console.error('Erro ao criar subgrupo:', error)
    snackbarText.value = 'Erro ao criar subgrupo. Tente novamente.'
    snackbarColor.value = 'error'
    snackbar.value = true
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.dialog-cadastro {
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
}

.header {
  margin-block-end: 24px;
}

.title {
  color: #1a1a1a;
  font-size: 24px;
  font-weight: 700;
}

.content {
  margin-block-end: 24px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style> 
