/**
 * Utilitários de Roteamento e Controle de Acesso
 */

export const isUserLoggedIn = () => !!(localStorage.getItem('userData') && localStorage.getItem('accessToken'))

export const getUserData = () => {
  const stringifiedUserData = localStorage.getItem('userData')
  return stringifiedUserData ? JSON.parse(stringifiedUserData) : null
}

export const getUserMenus = () => {
  const rawMenus = localStorage.getItem('userMenus')
  if (rawMenus) {
    try {
      const parsed = JSON.parse(rawMenus)
      if (Array.isArray(parsed)) return parsed
    } catch (e) {
      // fallback
    }
  }
  const userData = getUserData()
  if (userData && Array.isArray(userData.menus)) {
    return userData.menus
  }
  return []
}

export const MENU_TO_ROUTE = {
  dashboard: 'dashboards-crmrealrevision',
  estoque: 'estoque-list',
  vendas: 'venda-ponto1',
  usuarios: 'user-list',
  configuracoes: 'pages-account-settings-tab-account',
  relatorios: 'charts-apex-chart',
}

/**
 * Retorna a rota inicial baseada no papel real do usuário
 * - super_admin e admin_loja -> estoque-list (ou dashboard)
 * - funcionario -> primeira rota habilitada nos seus menus (ou not-authorized se nenhum)
 */
export const getHomeRouteForLoggedInUser = userRole => {
  if (userRole === 'super_admin' || userRole === 'admin_loja' || userRole === 'admin') {
    return { name: 'estoque-list' }
  }

  if (userRole === 'funcionario') {
    const menus = getUserMenus()
    if (menus.includes('estoque')) {
      return { name: 'estoque-list' }
    }
    for (const menu of menus) {
      if (MENU_TO_ROUTE[menu]) {
        return { name: MENU_TO_ROUTE[menu] }
      }
    }
    return { name: 'not-authorized' }
  }

  return { name: 'login' }
}

/**
 * Mapeia a rota para a respectiva menuKey para validação de acesso
 */
export const getMenuKeyForRoute = route => {
  if (route.meta && route.meta.menuKey) {
    return route.meta.menuKey
  }

  const path = (route.path || '').toLowerCase()
  const name = String(route.name || '').toLowerCase()

  if (path.startsWith('/estoque') || name.startsWith('estoque')) return 'estoque'
  if (path.startsWith('/venda') || name.startsWith('venda') || name.startsWith('ponto')) return 'vendas'
  if (path.startsWith('/dashboards') || name.startsWith('dashboards') || path.startsWith('/crm') || name.startsWith('crm')) return 'dashboard'
  if (path.startsWith('/user') || name.startsWith('user')) return 'usuarios'
  if (path.includes('account-settings') || path.startsWith('/configuracoes') || name.includes('account-settings') || name.startsWith('configuracoes')) return 'configuracoes'
  if (path.startsWith('/charts') || name.startsWith('charts') || path.startsWith('/relatorios') || name.startsWith('relatorios')) return 'relatorios'

  return null
}
