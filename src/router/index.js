import { canNavigate } from '@layouts/plugins/casl'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { 
  getHomeRouteForLoggedInUser, 
  getUserData, 
  getUserMenus,
  getMenuKeyForRoute,
  isUserLoggedIn 
} from './utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Redirecionamento da raiz baseado nos papéis reais (super_admin, admin_loja, funcionario)
    {
      path: '/',
      redirect: to => {
        const userData = getUserData()
        const userRole = userData && userData.role ? userData.role : null
        if (!userRole) {
          return { name: 'login', query: to.query }
        }
        return getHomeRouteForLoggedInUser(userRole)
      },
    },
    ...setupLayouts(routes),
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()

  // 1. Verificação básica do CASL
  if (!canNavigate(to)) {
    if (!isLoggedIn)
      return next({ name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } })

    return next({ name: 'not-authorized' })
  }

  // 2. Redirecionamento para tela inicial se já estiver logado (ex: acessando tela de login)
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    const userData = getUserData()
    return next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  }

  // 3. Guard de permissão de menu por rota para 'funcionario' (prevenção de acesso direto por URL)
  if (isLoggedIn) {
    const userData = getUserData()
    const role = userData ? userData.role : null

    // Apenas funcionários têm restrição de menus (admin_loja e super_admin acessam tudo)
    if (role === 'funcionario') {
      const menuKey = getMenuKeyForRoute(to)
      if (menuKey) {
        const userMenus = getUserMenus()
        if (!userMenus.includes(menuKey)) {
          console.warn(`[RouteGuard] Acesso bloqueado: o menu '${menuKey}' não está habilitado para este funcionário.`)
          return next({ name: 'not-authorized' })
        }
      }
    }
  }

  return next()
})

export default router
