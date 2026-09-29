/**
 * Utilitário central de checagem de permissões do usuário logado.
 */

export const getUsuarioLogado = () => {
  try {
    return JSON.parse(localStorage.getItem('userData') || '{}')
  } catch (e) {
    return {}
  }
}

/**
 * Retorna true se o usuário tem permissão para gerenciar estoque
 * (criar/editar itens, ajustar saldo, gerenciar fornecedores e consultar histórico de estoque).
 * - super_admin: sempre permitido
 * - admin_loja: sempre permitido
 * - funcionario: permitido somente se a flag 'estoquista' for true
 */
export const podeGerenciarEstoque = () => {
  const user = getUsuarioLogado()
  if (!user || !user.role) return false

  return user.role === 'admin_loja' || user.role === 'super_admin' || user.estoquista === true
}
