<script setup>
const userData = JSON.parse(localStorage.getItem('userData') || 'null')
const roleLabels = {
  super_admin: 'Super Admin',
  admin_loja: 'Admin Loja',
  funcionario: 'Funcionário',
}
const capitalizar = str => (str || '')
  .split(' ')
  .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
  .join(' ')
const tipoELoja = computed(() => {
  const tipo = roleLabels[userData?.role] || capitalizar(userData?.role || '')
  const loja = capitalizar(userData?.loja_nome || '')

  return loja ? `${tipo}/${loja}` : tipo
})
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
            <VListItemSubtitle
              class="text-disabled text-wrap"
              style="-webkit-line-clamp: unset;"
            >
              {{ tipoELoja }}
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
          <VListItem :to="{ path: '/logout' }">
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
