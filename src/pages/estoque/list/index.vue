<script setup>
import { VAvatar, VBtn, VCard, VCardActions, VCardText, VCardTitle, VChip, VCol, VDialog, VDivider, VIcon, VList, VListItem, VListItemSubtitle, VListItemTitle, VMenu, VPagination, VRow, VSelect, VSpacer, VTextField } from 'vuetify/components'

import estoque from '@/server/Estoque'

const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalItens = ref(0)
const itens = ref([])
const itemSelecionado = ref(null)
const dialogDetalhes = ref(false)
const isLoading = ref(false)

// 👉 Fetching itens
const fetchItens = async () => {
  try {
    isLoading.value = true
    const response = await estoque.listarItens()
    itens.value = response.data
    totalItens.value = response.data.length
    totalPage.value = Math.ceil(totalItens.value / rowPerPage.value)
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

// Computed para itens filtrados
const itensFiltrados = computed(() => {
  const query = searchQuery.value.toLowerCase()
  
  if (!query) return itens.value

  return itens.value.filter(item => {
    return (
      item.codigo.toLowerCase().includes(query) ||
      item.nome.toLowerCase().includes(query) ||
      item.nome_curto.toLowerCase().includes(query) ||
      item.grupo_nome.toLowerCase().includes(query) ||
      item.subgrupo_nome.toLowerCase().includes(query) ||
      (item.observacoes && item.observacoes.toLowerCase().includes(query))
    )
  })
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

// Configuração das colunas da tabela
const headers = [
  { title: 'CÓDIGO', key: 'codigo', sortable: true },
  { title: 'NOME', key: 'nome', sortable: true },
  { title: 'GRUPO', key: 'grupo_nome', sortable: true },
  { title: 'QUANTIDADE', key: 'quantidade_disponivel', sortable: true },
  { title: 'PREÇO', key: 'preco_consumidor', sortable: true },
  { title: 'AÇÕES', key: 'actions', sortable: false }
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
      <VCardText class="d-flex flex-wrap gap-4">
        <VSpacer />

        <div class="app-user-search-filter d-flex align-center">
          <!-- 👉 Add item button -->
          <VBtn>
            Adicionar Item
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

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
              AÇÕES
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
                <h6 class="text-sm font-weight-medium">
                  {{ item.nome }}
                </h6>
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
                color="success"
                size="small"
                class="text-capitalize"
              >
                {{ formatarQuantidade(item.quantidade_disponivel, item.unidade_nome) }}
              </VChip>
            </td>

            <!-- 👉 Preço -->
            <td class="text-medium-emphasis">
              {{ formatarPreco(item.preco_consumidor) }}
            </td>

            <!-- 👉 Actions -->
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
      <VCard v-if="itemSelecionado">
        <VCardTitle class="d-flex justify-space-between align-center">
          <span>Detalhes do Item</span>
          <VBtn
            icon
            variant="text"
            @click="dialogDetalhes = false"
          >
            <VIcon>mdi-close</VIcon>
          </VBtn>
        </VCardTitle>

        <VCardText>
          <VRow>
            <VCol
              cols="12"
              sm="6"
            >
              <VList>
                <VListItem>
                  <VListItemTitle class="font-weight-bold">
                    Código
                  </VListItemTitle>
                  <VListItemSubtitle>{{ itemSelecionado.codigo }}</VListItemSubtitle>
                </VListItem>

                <VListItem>
                  <VListItemTitle class="font-weight-bold">
                    Nome
                  </VListItemTitle>
                  <VListItemSubtitle>{{ itemSelecionado.nome }}</VListItemSubtitle>
                </VListItem>

                <VListItem>
                  <VListItemTitle class="font-weight-bold">
                    Nome Curto
                  </VListItemTitle>
                  <VListItemSubtitle>{{ itemSelecionado.nome_curto }}</VListItemSubtitle>
                </VListItem>

                <VListItem>
                  <VListItemTitle class="font-weight-bold">
                    Grupo
                  </VListItemTitle>
                  <VListItemSubtitle>{{ itemSelecionado.grupo_nome }} / {{ itemSelecionado.subgrupo_nome }}</VListItemSubtitle>
                </VListItem>

                <VListItem>
                  <VListItemTitle class="font-weight-bold">
                    Quantidade Disponível
                  </VListItemTitle>
                  <VListItemSubtitle>{{ itemSelecionado.quantidade_disponivel }} {{ itemSelecionado.unidade_nome }}</VListItemSubtitle>
                </VListItem>
              </VList>
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VList>
                <VListItem>
                  <VListItemTitle class="font-weight-bold">
                    Preços
                  </VListItemTitle>
                  <VListItemSubtitle>
                    <div>Consumidor: R$ {{ itemSelecionado.preco_consumidor }}</div>
                    <div>Revenda: R$ {{ itemSelecionado.preco_revenda }}</div>
                    <div>Outros: R$ {{ itemSelecionado.preco_outros }}</div>
                  </VListItemSubtitle>
                </VListItem>

                <VListItem>
                  <VListItemTitle class="font-weight-bold">
                    Custos
                  </VListItemTitle>
                  <VListItemSubtitle>
                    <div>Custo de Compra: R$ {{ itemSelecionado.custo_compra }}</div>
                    <div>Percentual de Lucro: {{ itemSelecionado.percentual_lucro }}%</div>
                  </VListItemSubtitle>
                </VListItem>

                <VListItem>
                  <VListItemTitle class="font-weight-bold">
                    Estoque
                  </VListItemTitle>
                  <VListItemSubtitle>
                    <div>Lote Ideal: {{ itemSelecionado.lote_ideal }}</div>
                    <div>Quantidade Mínima: {{ itemSelecionado.quantidade_minima }}</div>
                    <div>Local: {{ itemSelecionado.local_estoque_nome }}</div>
                    <div>Gaveta: {{ itemSelecionado.gaveta }}</div>
                  </VListItemSubtitle>
                </VListItem>

                <VListItem>
                  <VListItemTitle class="font-weight-bold">
                    Fabricante
                  </VListItemTitle>
                  <VListItemSubtitle>{{ itemSelecionado.fabricante_nome }}</VListItemSubtitle>
                </VListItem>

                <VListItem>
                  <VListItemTitle class="font-weight-bold">
                    Observações
                  </VListItemTitle>
                  <VListItemSubtitle>{{ itemSelecionado.observacoes }}</VListItemSubtitle>
                </VListItem>
              </VList>
            </VCol>
          </VRow>
        </VCardText>

        <VCardActions>
          <VSpacer />
          <VBtn
            color="primary"
            @click="dialogDetalhes = false"
          >
            Fechar
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
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

<style lang="scss" scope>
.user-pagination-select {
  .v-field__input,
  .v-field__append-inner {
    padding-block-start: 0.3rem;
  }
}
</style>
