import crm from './crm'
import estoque from './estoque'
import vendas from './vendas'
import emprestimos from './emprestimos'
import configuracoes from './configuracoes'
import relatorios from './relatorios'

export const allNavItems = [
  ...crm,
  ...estoque,
  ...vendas,
  ...emprestimos,
  ...configuracoes,
  ...relatorios,
]

const carregarMenusPermitidos = userData => {
  const rawMenus = localStorage.getItem('userMenus')
  if (rawMenus) {
    try {
      const parsed = JSON.parse(rawMenus)
      if (Array.isArray(parsed)) return parsed
    } catch {
      // fallback
    }
  }
  if (Array.isArray(userData.menus)) {
    return userData.menus
  }

  return []
}

const filtrarItemComFilhos = (item, userMenus) => {
  const filteredChildren = item.children.filter(child => {
    const key = child.menuKey || item.menuKey

    return key ? userMenus.includes(key) : false
  })

  if (filteredChildren.length === 0) return null

  return {
    ...item,
    children: filteredChildren,
  }
}

/**
 * Filtra a lista de navegação baseada no papel e permissões de menu do usuário logado.
 * - 'super_admin' e 'admin_loja': visualizam todos os menus e todos os submenus.
 * - 'funcionario': visualiza estritamente os menus/submenus que constam em userMenus (fail-closed).
 */
export const getNavItemsForUser = () => {
  try {
    const rawUser = localStorage.getItem('userData')
    const userData = rawUser ? JSON.parse(rawUser) : {}
    const role = userData.role

    if (role === 'super_admin' || role === 'admin_loja' || role === 'admin') {
      return allNavItems
    }

    const userMenus = carregarMenusPermitidos(userData)
    if (userMenus.length === 0) {
      return []
    }

    const filtered = []
    for (const item of allNavItems) {
      if (Array.isArray(item.children) && item.children.length > 0) {
        const itemFiltrado = filtrarItemComFilhos(item, userMenus)
        if (itemFiltrado) filtered.push(itemFiltrado)
      } else if (item.menuKey && userMenus.includes(item.menuKey)) {
        filtered.push(item)
      }
    }

    return filtered
  } catch (e) {
    console.error('Erro ao filtrar navItems:', e)

    return []
  }
}

export default allNavItems
