<script setup>
import { VAvatar, VBtn, VCard, VCardText, VChip, VCol, VDialog, VDivider, VPagination, VRow, VSelect, VSpacer, VTextField } from 'vuetify/components'
import { computed, ref, onMounted, watch } from 'vue'
import { podeGerenciarEstoque } from '@/utils/permissoes'

import estoque from '@/server/Estoque'
import emprestimosApi from '@/server/Emprestimos'
import Dialog from './dialog.vue'
import DialogCriar from './dialogCriar.vue'
import AbaFornecedores from './AbaFornecedores.vue'
import AbaLogsEstoque from './AbaLogsEstoque.vue'

const abaAtiva = ref('itens')
const temPermissao = computed(() => podeGerenciarEstoque())

const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalItens = ref(0)
const itens = ref([])
const itensEmprestadosMap = ref({})
const itemSelecionado = ref(null)
const dialogDetalhes = ref(false)
const dialogCriar = ref(false)
const isLoading = ref(false)
const ordenacaoSelecionada = ref('')
const ordemCrescente = ref(true)

// Opções de ordenação
const opcoesOrdenacao = [
  { title: 'Código', value: 'codigo' },
  { title: 'Nome', value: 'nome' },
  { title: 'Grupo', value: 'grupo_nome' },
  { title: 'Quantidade', value: 'quantidade_disponivel' },
  { title: 'Preço', value: 'preco_consumidor' },
  { title: 'Gaveta', value: 'gaveta' }
]

// Função para ordenar os itens
const ordenarItens = itens => {
  if (!ordenacaoSelecionada.value) return itens

  return [...itens].sort((a, b) => {
    const key = ordenacaoSelecionada.value
    const desc = !ordemCrescente.value

    let valueA = a[key]
    let valueB = b[key]

    // Tratamento especial para valores numéricos
    if (typeof valueA === 'number' || !isNaN(Number(valueA))) {
      valueA = Number(valueA)
      valueB = Number(valueB)
    } else {
      valueA = String(valueA).toLowerCase()
      valueB = String(valueB).toLowerCase()
    }

    if (valueA < valueB) return desc ? 1 : -1
    if (valueA > valueB) return desc ? -1 : 1
    
    return 0
  })
}

// 👉 Fetching itens
const fetchItens = async () => {
  try {
    isLoading.value = true
    const response = await estoque.listarItens()
    itens.value = response.data
    totalItens.value = response.data.length
    totalPage.value = Math.ceil(totalItens.value / rowPerPage.value)

    try {
      const empRes = await emprestimosApi.listarItensEmprestados()
      const map = {}
      if (Array.isArray(empRes.data)) {
        empRes.data.forEach(emp => {
          map[emp.item_destino_id] = emp
        })
      }
      itensEmprestadosMap.value = map
    } catch (e) {
      console.warn('Não foi possível carregar status de itens emprestados:', e)
    }
  } catch (error) {
    console.error('Erro ao carregar itens:', error)
  } finally {
    isLoading.value = false
  }
}

// Carrega os itens quando o componente é montado
onMounted(() => {
  fetchItens()
})

// Computed para itens filtrados e ordenados
const itensFiltrados = computed(() => {
  const query = searchQuery.value.toLowerCase()
  
  let filtered = itens.value
  if (query) {
    filtered = itens.value.filter(item => {
      return (
        item.codigo.toLowerCase().includes(query) ||
        item.nome.toLowerCase().includes(query) ||
        item.nome_curto.toLowerCase().includes(query) ||
        item.grupo_nome.toLowerCase().includes(query) ||
        item.subgrupo_nome.toLowerCase().includes(query) ||
        (item.observacoes && item.observacoes.toLowerCase().includes(query))
      )
    })
  }

  return ordenarItens(filtered)
})

// Computed para itens paginados
const itensPaginados = computed(() => {
  const start = (currentPage.value - 1) * rowPerPage.value
  const end = start + rowPerPage.value
  
  return itensFiltrados.value.slice(start, end)
})

const abrirDetalhes = item => {
  itemSelecionado.value = item
  dialogDetalhes.value = true
}

const abrirCriarItem = () => {
  dialogCriar.value = true
}

// Configuração das colunas da tabela
const headers = [
  { title: 'CÓDIGO', key: 'codigo', sortable: true },
  { title: 'NOME', key: 'nome', sortable: true },
  { title: 'GRUPO', key: 'grupo_nome', sortable: true },
  { title: 'QUANTIDADE', key: 'quantidade_disponivel', sortable: true },
  { title: 'PREÇO', key: 'preco_consumidor', sortable: true },
  { title: 'GAVETA', key: 'gaveta', sortable: true }
]

// Função para formatar o preço
const formatarPreco = preco => {
  return `R$ ${parseFloat(preco).toFixed(2)}`
}

// Função para formatar a quantidade
const formatarQuantidade = (quantidade, unidade) => {
  return `${quantidade} ${unidade}`
}

// Computed para dados de paginação
const paginationData = computed(() => {
  const first = (currentPage.value - 1) * rowPerPage.value + 1
  const last = Math.min(currentPage.value * rowPerPage.value, itensFiltrados.value.length)
  
  return `${first}-${last} de ${itensFiltrados.value.length}`
})

// Watch para resetar a página quando a pesquisa mudar
watch(searchQuery, () => {
  currentPage.value = 1
})
</script>

<template>
  <section>
    <VTabs
      v-model="abaAtiva"
      density="comfortable"
      class="mb-6"
    >
      <VTab
        value="itens"
        prepend-icon="mdi-package-variant-closed"
      >
        Itens de Estoque
      </VTab>
      <VTab
        value="fornecedores"
        prepend-icon="mdi-truck-delivery"
      >
        Fornecedores
      </VTab>
      <VTab
        v-if="temPermissao"
        value="logs"
        prepend-icon="mdi-history"
      >
        Log de Estoque
      </VTab>
    </VTabs>

    <VWindow v-model="abaAtiva">
      <VWindowItem value="itens">
        <VCard
          title="Estoque"
          class="mb-6"
        >
          <VCardText>
            <VRow>
              <!-- 👉 Search  -->
              <VCol
                cols="12"
                sm="4"
              >
                <VTextField
                  v-model="searchQuery"
                  label="Pesquisar"
                  density="compact"
                  placeholder="Pesquise por código, nome, grupo ou observações"
                  clearable
                  clear-icon="mdi-close"
                />
              </VCol>
            </VRow>
          </VCardText>
        </VCard>

        <VCard>
          <VCardText class="d-flex flex-wrap align-center justify-space-between gap-3">
            <div
              class="d-flex align-center gap-2 flex-grow-1"
              style="max-width: 320px;"
            >
              <!-- 👉 Ordenação -->
              <VSelect
                v-model="ordenacaoSelecionada"
                :items="opcoesOrdenacao"
                label="Ordenar por"
                density="compact"
                variant="outlined"
                class="flex-grow-1"
                clearable
              />

              <!-- 👉 Direção da ordenação -->
              <VBtn
                v-if="ordenacaoSelecionada"
                :icon="ordemCrescente ? 'mdi-sort-ascending' : 'mdi-sort-descending'"
                variant="text"
                @click="ordemCrescente = !ordemCrescente"
              />
            </div>

            <!-- 👉 Add item button -->
            <VBtn
              v-if="temPermissao"
              class="w-100 w-sm-auto"
              prepend-icon="mdi-plus"
              @click="abrirCriarItem"
            >
              Adicionar Item
            </VBtn>
          </VCardText>

          <VDivider />

          <div class="table-responsive">
            <VTable class="text-no-wrap">
              <!-- 👉 table head -->
              <thead>
                <tr>
                  <th scope="col">
                    CÓDIGO
                  </th>
                  <th scope="col">
                    NOME
                  </th>
                  <th scope="col">
                    GRUPO
                  </th>
                  <th scope="col">
                    QUANTIDADE
                  </th>
                  <th scope="col">
                    PREÇO
                  </th>
                  <th scope="col">
                    GAVETA
                  </th>
                </tr>
              </thead>

              <!-- 👉 table body -->
              <tbody>
                <tr
                  v-for="item in itensPaginados"
                  :key="item.id"
                  class="cursor-pointer"
                  @click="abrirDetalhes(item)"
                >
                  <!-- 👉 Código -->
                  <td>
                    <div class="d-flex align-center">
                      <VAvatar
                        variant="tonal"
                        color="primary"
                        class="me-3"
                        size="34"
                      >
                        <span>{{ item.codigo.substring(0, 2) }}</span>
                      </VAvatar>
                      <span class="text-medium-emphasis">{{ item.codigo }}</span>
                    </div>
                  </td>

                  <!-- 👉 Nome -->
                  <td>
                    <div class="d-flex flex-column">
                      <div class="d-flex align-center gap-2 flex-wrap">
                        <h6 class="text-sm font-weight-medium">
                          {{ item.nome }}
                        </h6>
                        <VChip
                          v-if="itensEmprestadosMap[item.id]"
                          size="x-small"
                          :color="itensEmprestadosMap[item.id].pago ? 'info' : 'warning'"
                          variant="tonal"
                        >
                          Emprestado de {{ itensEmprestadosMap[item.id].loja_origem_nome }} ({{ itensEmprestadosMap[item.id].quantidade_emprestada }} un • {{ itensEmprestadosMap[item.id].pago ? 'Pago' : 'Não Pago' }})
                        </VChip>
                      </div>
                      <span class="text-xs text-medium-emphasis">{{ item.nome_curto }}</span>
                    </div>
                  </td>

                  <!-- 👉 Grupo -->
                  <td>
                    <div class="d-flex flex-column">
                      <span class="text-medium-emphasis">{{ item.grupo_nome }}</span>
                      <span class="text-xs text-medium-emphasis">{{ item.subgrupo_nome }}</span>
                    </div>
                  </td>

                  <!-- 👉 Quantidade -->
                  <td>
                    <VChip
                      :color="item.quantidade_disponivel > item.quantidade_minima ? 'success' : 'error'"
                      size="small"
                      class="text-capitalize"
                    >
                      {{ item.quantidade_disponivel }}
                    </VChip>
                  </td>

                  <!-- 👉 Preço -->
                  <td class="text-medium-emphasis">
                    {{ formatarPreco(item.preco_consumidor) }}
                  </td>

                  <!-- 👉 GAVETA -->
                  <td>
                    <div class="d-flex flex-column">
                      <h6 class="text-sm font-weight-medium">
                        {{ item.local_estoque_id }}
                      </h6>
                      <span class="text-xs text-medium-emphasis">{{ item.gaveta }}</span>
                    </div>
                  </td>

                  <!--
                    👉 Actions 
                    <td>
                    <VBtn
                    size="x-small"
                    color="default"
                    variant="plain"
                    icon
                    @click.stop
                    >
                    <VIcon
                    size="24"
                    icon="mdi-dots-vertical"
                    />

                    <VMenu activator="parent">
                    <VList>
                    <VListItem @click="abrirDetalhes(item)">
                    <template #prepend>
                    <VIcon
                    icon="mdi-eye-outline"
                    :size="20"
                    class="me-3"
                    />
                    </template>
                    <VListItemTitle>Visualizar</VListItemTitle>
                    </VListItem>

                    <VListItem>
                    <template #prepend>
                    <VIcon
                    icon="mdi-pencil-outline"
                    :size="20"
                    class="me-3"
                    />
                    </template>
                    <VListItemTitle>Editar</VListItemTitle>
                    </VListItem>

                    <VListItem>
                    <template #prepend>
                    <VIcon
                    icon="mdi-delete-outline"
                    :size="20"
                    class="me-3"
                    />
                    </template>
                    <VListItemTitle>Excluir</VListItemTitle>
                    </VListItem>
                    </VList>
                    </VMenu>
                    </VBtn>
                    </td>
                  -->
                </tr>
              </tbody>

              <!-- 👉 table footer  -->
              <tfoot v-show="!itens.length">
                <tr>
                  <td
                    colspan="6"
                    class="text-center"
                  >
                    Nenhum item encontrado
                  </td>
                </tr>
              </tfoot>
            </VTable>
          </div>

          <VDivider />

          <VCardText class="d-flex align-center flex-wrap justify-end gap-4 pa-2">
            <div
              class="d-flex align-center me-3"
              style="width: 171px;"
            >
              <span class="text-no-wrap me-3">Itens por página:</span>

              <VSelect
                v-model="rowPerPage"
                density="compact"
                variant="plain"
                class="user-pagination-select"
                :items="[10, 20, 30, 50]"
              />
            </div>

            <div class="d-flex align-center">
              <h6 class="text-sm font-weight-regular">
                {{ paginationData }}
              </h6>

              <VPagination
                v-model="currentPage"
                size="small"
                :total-visible="1"
                :length="totalPage"
              />
            </div>
          </VCardText>
        </VCard>

        <!-- Dialog de Detalhes -->
        <VDialog
          v-model="dialogDetalhes"
          max-width="800"
        >
          <Dialog
            :item="itemSelecionado"
            :is-open="dialogDetalhes"
            @close="dialogDetalhes = false"
            @update:item="fetchItens"
          />
        </VDialog>

        <!-- Dialog de Criação -->
        <VDialog
          v-model="dialogCriar"
          max-width="800"
        >
          <DialogCriar
            :is-open="dialogCriar"
            @close="dialogCriar = false"
            @update:item="fetchItens"
          />
        </VDialog>
      </VWindowItem>

      <!-- Aba Fornecedores -->
      <VWindowItem value="fornecedores">
        <AbaFornecedores />
      </VWindowItem>

      <!-- Aba Log de Estoque -->
      <VWindowItem
        v-if="temPermissao"
        value="logs"
      >
        <AbaLogsEstoque />
      </VWindowItem>
    </VWindow>
  </section>
</template>

<style lang="scss">
.app-user-search-filter {
  inline-size: 24.0625rem;
}

.text-capitalize {
  text-transform: capitalize;
}

.v-table {
  .v-table__wrapper {
    table {
      thead {
        tr {
          th {
            color: rgba(var(--v-theme-on-surface), 0.7);
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
        }
      }

      tbody {
        tr {
          td {
            font-size: 0.875rem;
          }
        }
      }
    }
  }
}

.cursor-pointer {
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.02);
  }
}

.v-avatar {
  background-color: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
}
</style>

<style scoped>
.table-responsive {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
</style>

<style lang="scss">
.user-pagination-select {
  .v-field__input,
  .v-field__append-inner {
    padding-block-start: 0.3rem;
  }
}
</style>
