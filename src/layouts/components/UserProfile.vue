<script setup>
import { initialAbility } from '@/plugins/casl/ability'
import { useAppAbility } from '@/plugins/casl/useAppAbility'

const router = useRouter()
const ability = useAppAbility()
const userData = JSON.parse(localStorage.getItem('userData') || 'null')
const avatarImages = import.meta.glob('@/assets/images/avatars/avatar-*.png', { eager: true, import: 'default' })
const avatars = Object.keys(avatarImages)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map(path => avatarImages[path])
const userAvatar = computed(() => {
  // O login legado retorna um caminho de desenvolvimento fixo, inválido no build.
  if (userData?.avatar && !userData.avatar.startsWith('/src/')) return userData.avatar
  const userId = Number(userData?.id)
  const fallbackHash = [...(userData?.username || '')].reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 0)
  const index = Number.isInteger(userId) ? Math.abs(userId) : fallbackHash

  return avatars[index % avatars.length]
})
const logout = () => {

  // Remove "userData" from localStorage
  localStorage.removeItem('userData')

  // Remove "accessToken" from localStorage
  localStorage.removeItem('accessToken')
  router.push('/login').then(() => {

    // Remove "userAbilities" from localStorage
    localStorage.removeItem('userAbilities')

    // Reset ability to initial ability
    ability.update(initialAbility)
  })
}
const avatarBadgeProps = {
  dot: true,
  location: 'bottom right',
  offsetX: 3,
  offsetY: 3,
  color: 'success',
  bordered: true
}
</script>

<template>
  <VBadge v-bind="avatarBadgeProps">
    <VAvatar
      class="cursor-pointer"
      size="32"
      color="primary"
      variant="tonal"
    >
      <VImg
        class="user-profile-avatar-image"
        :src="userAvatar"
        :alt="userData?.username || 'Usuário'"
      />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge v-bind="avatarBadgeProps">
                  <VAvatar
                    color="primary"
                    size="40"
                    variant="tonal"
                  >
                    <VImg
                      class="user-profile-avatar-image"
                      :src="userAvatar"
                      :alt="userData?.username || 'Usuário'"
                    />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              {{ userData?.fullName || userData?.username }}
            </VListItemTitle>
            <VListItemSubtitle class="text-disabled">
              {{ userData.role }}
            </VListItemSubtitle>
          </VListItem>

          <VDivider class="my-2" />

          <!-- 👉 Configurações -->
          <VListItem :to="{ name: 'configuracoes' }">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="mdi-cog-outline"
                size="22"
              />
            </template>

            <VListItemTitle>Configurações</VListItemTitle>
          </VListItem>

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Sair -->
          <VListItem @click="logout">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="mdi-logout-variant"
                size="22"
              />
            </template>

            <VListItemTitle>Sair</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>

<style scoped>
.user-profile-avatar-image {
  position: relative;
  z-index: 1;
}

.user-profile-avatar-image :deep(.v-img__img) {
  z-index: 1;
}
</style>
