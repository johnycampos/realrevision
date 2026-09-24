import crm from './crm'
import estoque from './estoque'
import vendas from './vendas'
import usuarios from './usuarios'
import configuracoes from './configuracoes'
import relatorios from './relatorios'

export const allNavItems = [
  ...crm,
  ...estoque,
  ...vendas,
  ...usuarios,
  ...configuracoes,
  ...relatorios,
]

/**
 * Filtra a lista de navegação baseada no papel e permissões de menu do usuário logado.
 * - 'super_admin' e 'admin_loja': visualizam todos os menus.
 * - 'funcionario': visualiza estritamente os menus que constam em userMenus (fail-closed).
 */
export const getNavItemsForUser = () => {
  try {
    const rawUser = localStorage.getItem('userData')
    const userData = rawUser ? JSON.parse(rawUser) : {}
    const role = userData.role

    // Administradores e super_admin veem todos os menus
    if (role === 'super_admin' || role === 'admin_loja' || role === 'admin') {
      return allNavItems
    }

    // Funcionários veem apenas os menus habilitados (fail-closed)
    const rawMenus = localStorage.getItem('userMenus')
    let userMenus = []
    if (rawMenus) {
      try {
        userMenus = JSON.parse(rawMenus)
      } catch (e) {
        userMenus = []
      }
    }

    // Se userData já tiver menus cadastrados
    if ((!userMenus || userMenus.length === 0) && Array.isArray(userData.menus)) {
      userMenus = userData.menus
    }

    if (!Array.isArray(userMenus) || userMenus.length === 0) {
      return []
    }

    return allNavItems.filter(item => {
      if (!item.menuKey) return false
      return userMenus.includes(item.menuKey)
    })
  } catch (e) {
    console.error('Erro ao filtrar navItems:', e)
    return []
  }
}

export default allNavItems
