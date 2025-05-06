<template>
  <div class="dialog-cadastro">
    <div class="header">
      <h2 class="title">
        Novo Fabricante
      </h2>
    </div>

    <div class="content">
      <VTextField
        v-model="novoFabricante.nome"
        label="Nome do Fabricante"
        variant="outlined"
        density="compact"
        class="mb-4"
      />
    </div>
    <div class="content">
      <VTextField
        v-model="novoFabricante.cnpj"
        label="CNPJ"
        variant="outlined"
        density="compact"
        class="mb-4"
        type="number"
      />
    </div>
    <div class="content">
      <VTextField
        v-model="novoFabricante.contato"
        label="Contato"
        variant="outlined"
        density="compact"
        class="mb-4"
      />
    </div>
    <div class="content">
      <VTextField
        v-model="novoFabricante.telefone"
        label="Telefone"
        variant="outlined"
        density="compact"
        class="mb-4"
        type="number"
      />
    </div>
    <div class="content">
      <VTextField
        v-model="novoFabricante.email"
        label="Email"
        variant="outlined"
        density="compact"
        class="mb-4"
      />
    </div>
    <div class="content">
      <VTextField
        v-model="novoFabricante.observacoes"
        label="Observações"
        variant="outlined"
        density="compact"
        class="mb-4"
      />
    </div>

    <div class="actions">
      <VBtn
        color="primary"
        :loading="isLoading"
        @click="salvarFabricante"
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
import { ref } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  }
})

const emit = defineEmits(['close', 'cadastroConcluido'])

const novoFabricante = ref({
  nome: '',
  descricao: ''
})

const isLoading = ref(false)
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')

const salvarFabricante = async () => {
  try {
    isLoading.value = true
    await estoque.criarFabricante(novoFabricante.value)
    
    snackbarText.value = 'Fabricante criado com sucesso!'
    snackbarColor.value = 'success'
    snackbar.value = true
    
    // Limpa o formulário
    novoFabricante.value.nome = ''
    novoFabricante.value.descricao = ''
    
    // Notifica o componente pai
    emit('cadastroConcluido')
    
    // Fecha o dialog após 2 segundos
    setTimeout(() => {
      emit('close')
    }, 2000)
  } catch (error) {
    console.error('Erro ao criar fabricante:', error)
    snackbarText.value = 'Erro ao criar fabricante. Tente novamente.'
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
