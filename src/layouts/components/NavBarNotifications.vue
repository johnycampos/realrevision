<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Dashboard from '@/server/Dashboard'

const router = useRouter()
const isLoading = ref(false)
const countEstoqueBaixo = ref(0)
const itensEstoqueBaixo = ref([])

const carregarAlertas = async () => {
  try {
    isLoading.value = true
    const response = await Dashboard.obterResumo()
    if (response?.data) {
      countEstoqueBaixo.value = Number(response.data.consolidado?.itens_estoque_baixo_count || 0)
      itensEstoqueBaixo.value = response.data.itens_estoque_baixo || []
    }
  } catch (error) {
    console.error('Erro ao carregar notificações de estoque baixo:', error)
  } finally {
    isLoading.value = false
  }
}

const navegarParaEstoque = () => {
  router.push({ name: 'estoque-list' })
}

onMounted(() => {
  carregarAlertas()
})
</script>

<template>
  <VBadge
    class="flex-shrink-0"
    :style="{ marginInlineEnd: `calc(${String(countEstoqueBaixo).length}ch + 12px)` }"
    :model-value="countEstoqueBaixo > 0"
    :content="countEstoqueBaixo"
    color="error"
    offset-x="4"
    offset-y="4"
  >
    <VBtn
      icon
      variant="text"
      color="default"
      size="small"
    >
      <VIcon
        icon="mdi-bell-outline"
        size="24"
      />

      <VMenu
        activator="parent"
        width="360px"
        location="bottom end"
        offset="14px"
      >
        <VCard elevation="4">
          <!-- Cabeçalho -->
          <VCardItem class="py-3 px-4">
            <div class="d-flex align-center justify-space-between w-100">
              <div class="d-flex align-center gap-2">
                <VIcon
                  icon="mdi-package-variant-closed-alert"
                  :color="countEstoqueBaixo > 0 ? 'error' : 'default'"
                  size="22"
                />
                <span class="font-weight-semibold text-base">Estoque Baixo</span>
              </div>
              <VChip
                v-if="countEstoqueBaixo > 0"
                color="error"
                size="small"
                variant="tonal"
              >
                {{ countEstoqueBaixo }} em alerta
              </VChip>
            </div>
          </VCardItem>

          <VDivider />

          <!-- Lista ou Estado Vazio -->
          <div
            v-if="isLoading"
            class="text-center py-6"
          >
            <VProgressCircular
              indeterminate
              size="24"
              color="primary"
            />
          </div>

          <div v-else-if="countEstoqueBaixo > 0">
            <div class="px-4 py-2 text-caption text-medium-emphasis">
              {{ countEstoqueBaixo }} {{ countEstoqueBaixo === 1 ? 'item está' : 'itens estão' }} com estoque abaixo do mínimo.
            </div>

            <VList
              class="py-0"
              density="compact"
            >
              <VListItem
                v-for="item in itensEstoqueBaixo.slice(0, 5)"
                :key="item.id"
                class="px-4 py-2"
                lines="two"
              >
                <template #prepend>
                  <VAvatar
                    color="error"
                    variant="tonal"
                    size="32"
                    class="me-2"
                  >
                    <VIcon
                      icon="mdi-alert-outline"
                      size="18"
                    />
                  </VAvatar>
                </template>

                <VListItemTitle class="font-weight-medium text-body-2">
                  {{ item.nome }}
                </VListItemTitle>
                <VListItemSubtitle class="text-caption text-medium-emphasis">
                  Disponível: <strong class="text-error">{{ item.quantidade_disponivel }}</strong> / Mínimo: {{ item.quantidade_minima }}
                </VListItemSubtitle>
              </VListItem>
            </VList>

            <div
              v-if="countEstoqueBaixo > 5"
              class="text-center text-caption text-disabled py-1"
            >
              + {{ countEstoqueBaixo - 5 }} outros itens em alerta
            </div>
          </div>

          <div
            v-else
            class="text-center py-6 px-4"
          >
            <VAvatar
              color="success"
              variant="tonal"
              size="40"
              class="mb-2"
            >
              <VIcon
                icon="mdi-check"
                size="22"
              />
            </VAvatar>
            <p class="text-body-2 font-weight-medium mb-0">
              Nenhum item em estoque baixo
            </p>
            <p class="text-caption text-medium-emphasis mb-0">
              Todos os produtos estão com níveis adequados.
            </p>
          </div>

          <VDivider />

          <!-- Ações -->
          <VCardActions class="p-3">
            <VBtn
              block
              color="primary"
              variant="flat"
              prepend-icon="mdi-warehouse"
              @click="navegarParaEstoque"
            >
              Ver Estoque
            </VBtn>
          </VCardActions>
        </VCard>
      </VMenu>
    </VBtn>
  </VBadge>
</template>
