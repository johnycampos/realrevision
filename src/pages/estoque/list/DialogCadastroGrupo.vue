<template>
  <div class="dialog-cadastro">
    <div class="header">
      <h2 class="title">
        Novo Grupo
      </h2>
    </div>

    <div class="content">
      <VTextField
        v-model="novoGrupo.nome"
        label="Nome do Grupo"
        variant="outlined"
        density="compact"
        class="mb-4"
      />
    </div>
    <div class="content">
      <VTextField
        v-model="novoGrupo.descricao"
        label="Descrição do Grupo"
        variant="outlined"
        density="compact"
        class="mb-4"
      />
    </div>

    <div class="actions">
      <VBtn
        color="primary"
        :loading="isLoading"
        @click="salvarGrupo"
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

const emit = defineEmits(['close', 'cadastro-concluido'])

const novoGrupo = ref({
  nome: ''
})

const isLoading = ref(false)
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')

const salvarGrupo = async () => {
  try {
    isLoading.value = true
    await estoque.criarGrupo(novoGrupo.value)
    
    snackbarText.value = 'Grupo criado com sucesso!'
    snackbarColor.value = 'success'
    snackbar.value = true
    
    // Limpa o formulário
    novoGrupo.value.nome = ''
    
    // Notifica o componente pai
    // eslint-disable-next-line vue/custom-event-name-casing
    emit('cadastro-concluido')
    
    // Fecha o dialog após 2 segundos
    setTimeout(() => {
      emit('close')
    }, 2000)
  } catch (error) {
    console.error('Erro ao criar grupo:', error)
    snackbarText.value = 'Erro ao criar grupo. Tente novamente.'
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
