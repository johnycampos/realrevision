<script setup>
import { ref, onMounted } from 'vue'
import { getNavItemsForUser } from '@/navigation/vertical'
import Auth from '@/server/Auth'

// Composable
import { useSkins } from '@core/composable/useSkins'
import { useThemeConfig } from '@core/composable/useThemeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

// @layouts plugin
import { VerticalNavLayout } from '@layouts'

const {appRouteTransition, isLessThanOverlayNavBreakpoint} = useThemeConfig()
const {width: windowWidth} = useWindowSize()
const {layoutAttrs, injectSkinClasses} = useSkins()

const navItems = ref(getNavItemsForUser())

// Sincroniza dados e menus permitidos do usuário autenticado no backend
onMounted(async () => {
  try {
    const response = await Auth.obterMe()
    if (response && response.data) {
      if (response.data.menusChaves) {
        localStorage.setItem('userMenus', JSON.stringify(response.data.menusChaves))
      }
      if (response.data.user) {
        const rawUser = localStorage.getItem('userData')
        const currentUser = rawUser ? JSON.parse(rawUser) : {}
        localStorage.setItem('userData', JSON.stringify({ ...currentUser, ...response.data.user }))
      }
      navItems.value = getNavItemsForUser()
    }
  } catch (e) {
    console.warn('Não foi possível sincronizar menus via /auth/me:', e)
  }
})

// ℹ️ This will inject classes in body tag for accurate styling
injectSkinClasses()
</script>

<template>
  <VerticalNavLayout
    :nav-items="navItems"
    v-bind="layoutAttrs"
  >
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <VBtn
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          icon
          variant="text"
          color="default"
          class="ms-n3"
          size="small"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon
            icon="mdi-menu"
            size="24"
          />
        </VBtn>

        <VBtn
          icon
          variant="text"
          color="default"
          class="ms-lg-n3"
          size="small"
        >
          <VIcon
            icon="mdi-magnify"
            size="24"
          />
        </VBtn>

        <VSpacer />

        <NavBarI18n />
        <NavbarThemeSwitcher />
        <NavBarNotifications class="me-2" />
        <UserProfile />
      </div>
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer />
  </VerticalNavLayout>
</template>
