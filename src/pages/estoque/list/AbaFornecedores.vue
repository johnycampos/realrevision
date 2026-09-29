<script setup>
import { ref, computed, onMounted } from 'vue'
import estoque from '@/server/Estoque'
import { podeGerenciarEstoque } from '@/utils/permissoes'

const fornecedores = ref([])
const isLoading = ref(false)
const searchQuery = ref('')
const dialogForm = ref(false)
const dialogDelete = ref(false)
const isEditing = ref(false)
const isSaving = ref(false)
const fornecedorSelecionado = ref(null)

const temPermissao = computed(() => podeGerenciarEstoque())

const formFornecedor = ref({
  codigo: '',
  nome: '',
  cnpj: '',
  fone: '',
  cidade: '',
  uf: ''
})

const snackbar = ref({
  show: false,
  text: '',
  color: 'success'
})

const mostrarAlerta = (text, color = 'success') => {
  snackbar.value = { show: true, text, color }
}

const carregarFornecedores = async () => {
  isLoading.value = true
  try {
    const res = await estoque.listarFornecedoresCatalogo()
    fornecedores.value = Array.isArray(res.data) ? res.data : []
  } catch (err) {
    mostrarAlerta('Erro ao carregar fornecedores', 'error')
  } finally {
    isLoading.value = false
  }
}

const fornecedoresFiltrados = computed(() => {
  if (!searchQuery.value) return fornecedores.value
  const q = searchQuery.value.toLowerCase().trim()
  
  return fornecedores.value.filter(f => {
    return (
      (f.nome && f.nome.toLowerCase().includes(q)) ||
      (f.codigo && f.codigo.toLowerCase().includes(q)) ||
      (f.cnpj && f.cnpj.toLowerCase().includes(q)) ||
      (f.cidade && f.cidade.toLowerCase().includes(q)) ||
      (f.uf && f.uf.toLowerCase().includes(q))
    )
  })
})

const abrirModalCriar = () => {
  isEditing.value = false
  fornecedorSelecionado.value = null
  formFornecedor.value = {
    codigo: '',
    nome: '',
    cnpj: '',
    fone: '',
    cidade: '',
    uf: ''
  }
  dialogForm.value = true
}

const abrirModalEditar = fornecedor => {
  isEditing.value = true
  fornecedorSelecionado.value = fornecedor
  formFornecedor.value = {
    codigo: fornecedor.codigo || '',
    nome: fornecedor.nome || '',
    cnpj: fornecedor.cnpj || '',
    fone: fornecedor.fone || '',
    cidade: fornecedor.cidade || '',
    uf: fornecedor.uf || ''
  }
  dialogForm.value = true
}

const abrirConfirmacaoDelete = fornecedor => {
  fornecedorSelecionado.value = fornecedor
  dialogDelete.value = true
}

const salvarFornecedor = async () => {
  if (!formFornecedor.value.nome || !formFornecedor.value.nome.trim()) {
    mostrarAlerta('O nome do fornecedor é obrigatório', 'warning')
    
    return
  }

  isSaving.value = true
  try {
    const payload = {
      codigo: formFornecedor.value.codigo ? formFornecedor.value.codigo.trim() : null,
      nome: formFornecedor.value.nome.trim(),
      cnpj: formFornecedor.value.cnpj ? formFornecedor.value.cnpj.trim() : null,
      fone: formFornecedor.value.fone ? formFornecedor.value.fone.trim() : null,
      cidade: formFornecedor.value.cidade ? formFornecedor.value.cidade.trim() : null,
      uf: formFornecedor.value.uf ? formFornecedor.value.uf.trim().toUpperCase() : null
    }

    if (isEditing.value && fornecedorSelecionado.value) {
      await estoque.atualizarFornecedorCatalogo(fornecedorSelecionado.value.id, payload)
      mostrarAlerta('Fornecedor atualizado com sucesso!')
    } else {
      await estoque.criarFornecedorCatalogo(payload)
      mostrarAlerta('Fornecedor cadastrado com sucesso!')
    }

    dialogForm.value = false
    await carregarFornecedores()
  } catch (err) {
    const msg = err.response?.data?.message || 'Erro ao salvar fornecedor'
    mostrarAlerta(msg, 'error')
  } finally {
    isSaving.value = false
  }
}

const confirmarDelecao = async () => {
  if (!fornecedorSelecionado.value) return
  try {
    await estoque.deletarFornecedorCatalogo(fornecedorSelecionado.value.id)
    mostrarAlerta('Fornecedor deletado com sucesso!')
    dialogDelete.value = false
    await carregarFornecedores()
  } catch (err) {
    mostrarAlerta('Erro ao excluir fornecedor', 'error')
  }
}

onMounted(() => {
  carregarFornecedores()
})
</script>

<template>
  <div>
    <!-- Barra de busca e ações -->
    <VCard class="mb-4">
      <VCardText class="d-flex flex-wrap align-center justify-space-between gap-4">
        <div
          style="max-width: 400px;"
          class="flex-grow-1"
        >
          <VTextField
            v-model="searchQuery"
            placeholder="Buscar por nome, código, CNPJ ou cidade..."
            prepend-inner-icon="mdi-magnify"
            density="compact"
            variant="outlined"
            clearable
            hide-details
          />
        </div>

        <VBtn
          v-if="temPermissao"
          color="primary"
          prepend-icon="mdi-plus"
          @click="abrirModalCriar"
        >
          Novo Fornecedor
        </VBtn>
      </VCardText>
    </VCard>

    <!-- Tabela de Fornecedores -->
    <VCard :loading="isLoading">
      <div class="table-responsive">
        <VTable class="text-no-wrap">
          <thead>
            <tr>
              <th class="text-uppercase">
                Código
              </th>
              <th class="text-uppercase">
                Nome / Razão Social
              </th>
              <th class="text-uppercase">
                CNPJ
              </th>
              <th class="text-uppercase">
                Telefone
              </th>
              <th class="text-uppercase">
                Cidade / UF
              </th>
              <th
                v-if="temPermissao"
                class="text-uppercase text-center"
              >
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="forn in fornecedoresFiltrados"
              :key="forn.id"
            >
              <td class="font-weight-medium">
                <VChip
                  size="small"
                  variant="tonal"
                  color="primary"
                >
                  {{ forn.codigo || '—' }}
                </VChip>
              </td>
              <td class="font-weight-medium">
                {{ forn.nome }}
              </td>
              <td>
                <span class="text-medium-emphasis">{{ forn.cnpj || '—' }}</span>
              </td>
              <td>
                <span class="text-medium-emphasis">{{ forn.fone || '—' }}</span>
              </td>
              <td>
                <span v-if="forn.cidade">{{ forn.cidade }}{{ forn.uf ? ' / ' + forn.uf : '' }}</span>
                <span
                  v-else
                  class="text-medium-emphasis"
                >—</span>
              </td>
              <td
                v-if="temPermissao"
                class="text-center"
              >
                <VBtn
                  icon
                  size="small"
                  variant="text"
                  color="primary"
                  title="Editar Fornecedor"
                  @click="abrirModalEditar(forn)"
                >
                  <VIcon icon="mdi-pencil-outline" />
                </VBtn>
                <VBtn
                  icon
                  size="small"
                  variant="text"
                  color="error"
                  title="Excluir Fornecedor"
                  @click="abrirConfirmacaoDelete(forn)"
                >
                  <VIcon icon="mdi-delete-outline" />
                </VBtn>
              </td>
            </tr>

            <tr v-if="fornecedoresFiltrados.length === 0">
              <td
                :colspan="temPermissao ? 6 : 5"
                class="text-center py-6 text-medium-emphasis"
              >
                Nenhum fornecedor encontrado.
              </td>
            </tr>
          </tbody>
        </VTable>
      </div>
    </VCard>

    <!-- Dialog de Cadastro / Edição -->
    <VDialog
      v-model="dialogForm"
      max-width="600"
      persistent
    >
      <VCard>
        <VCardTitle class="pa-4 d-flex justify-space-between align-center">
          <span class="text-h6 font-weight-bold">
            {{ isEditing ? 'Editar Fornecedor' : 'Novo Fornecedor' }}
          </span>
          <VBtn
            icon
            variant="text"
            size="small"
            @click="dialogForm = false"
          >
            <VIcon icon="mdi-close" />
          </VBtn>
        </VCardTitle>

        <VDivider />

        <VCardText class="pa-4">
          <VRow>
            <VCol
              cols="12"
              sm="4"
            >
              <VTextField
                v-model="formFornecedor.codigo"
                label="Código"
                placeholder="ex: FORN-01"
                density="comfortable"
              />
            </VCol>
            <VCol
              cols="12"
              sm="8"
            >
              <VTextField
                v-model="formFornecedor.nome"
                label="Nome / Razão Social *"
                placeholder="Nome da empresa distribuidora"
                density="comfortable"
                required
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VTextField
                v-model="formFornecedor.cnpj"
                label="CNPJ"
                placeholder="00.000.000/0000-00"
                density="comfortable"
              />
            </VCol>
            <VCol
              cols="12"
              sm="6"
            >
              <VTextField
                v-model="formFornecedor.fone"
                label="Telefone / Contato"
                placeholder="(21) 99999-9999"
                density="comfortable"
              />
            </VCol>

            <VCol
              cols="12"
              sm="8"
            >
              <VTextField
                v-model="formFornecedor.cidade"
                label="Cidade"
                placeholder="Nova Iguaçu"
                density="comfortable"
              />
            </VCol>
            <VCol
              cols="12"
              sm="4"
            >
              <VTextField
                v-model="formFornecedor.uf"
                label="UF"
                placeholder="RJ"
                maxlength="2"
                density="comfortable"
              />
            </VCol>
          </VRow>
        </VCardText>

        <VDivider />

        <VCardActions class="pa-4 d-flex justify-end gap-2">
          <VBtn
            variant="outlined"
            color="secondary"
            @click="dialogForm = false"
          >
            Cancelar
          </VBtn>
          <VBtn
            color="primary"
            :loading="isSaving"
            @click="salvarFornecedor"
          >
            {{ isEditing ? 'Salvar Alterações' : 'Cadastrar' }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Dialog de Exclusão -->
    <VDialog
      v-model="dialogDelete"
      max-width="450"
    >
      <VCard>
        <VCardTitle class="pa-4 font-weight-bold">
          Confirmar Exclusão
        </VCardTitle>
        <VCardText class="pa-4">
          Deseja realmente remover o fornecedor <strong>{{ fornecedorSelecionado?.nome }}</strong>?
          <p class="text-caption text-medium-emphasis mt-2 mb-0">
            A exclusão desvinculará este fornecedor de todos os itens cadastrados.
          </p>
        </VCardText>
        <VCardActions class="pa-4 d-flex justify-end gap-2">
          <VBtn
            variant="outlined"
            color="secondary"
            @click="dialogDelete = false"
          >
            Cancelar
          </VBtn>
          <VBtn
            color="error"
            @click="confirmarDelecao"
          >
            Excluir
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Snackbar -->
    <VSnackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      location="bottom"
      timeout="3000"
    >
      {{ snackbar.text }}
    </VSnackbar>
  </div>
</template>
