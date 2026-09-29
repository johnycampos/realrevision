import { API } from './ApiConfig'

export default {
  /**
   * Consulta estoque disponível de outras lojas
   */
  buscarEstoqueOutrasLojas: (busca = '') => {
    const params = busca ? { busca } : {}
    return API.get('/api/emprestimos/estoque-outras-lojas', { params })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao consultar estoque de outras lojas:', error)
        throw error
      })
  },

  /**
   * Solicita empréstimo de uma peça
   */
  solicitar: dados => {
    return API.post('/api/emprestimos', dados)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao solicitar empréstimo:', error)
        throw error
      })
  },

  /**
   * Lista empréstimos de acordo com o papel e filtros
   */
  listar: (filtros = {}) => {
    return API.get('/api/emprestimos', { params: filtros })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar empréstimos:', error)
        throw error
      })
  },

  /**
   * Busca um empréstimo por ID
   */
  buscarPorId: id => {
    return API.get(`/api/emprestimos/${id}`)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao buscar empréstimo:', error)
        throw error
      })
  },

  /**
   * Aprova uma solicitação de empréstimo (apenas admin da loja de origem ou super_admin)
   */
  aprovar: id => {
    return API.put(`/api/emprestimos/${id}/aprovar`)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao aprovar empréstimo:', error)
        throw error
      })
  },

  /**
   * Rejeita uma solicitação de empréstimo com motivo opcional
   */
  rejeitar: (id, motivo = '') => {
    return API.put(`/api/emprestimos/${id}/rejeitar`, { motivo })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao rejeitar empréstimo:', error)
        throw error
      })
  },

  /**
   * Registra pagamento de um empréstimo aprovado
   */
  registrarPagamento: (id, forma_pagamento) => {
    return API.put(`/api/emprestimos/${id}/pagamento`, { forma_pagamento })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao registrar pagamento do empréstimo:', error)
        throw error
      })
  },

  /**
   * Busca empréstimo de origem para um item recebido
   */
  buscarPorItemDestino: itemId => {
    return API.get(`/api/emprestimos/por-item-destino/${itemId}`)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao buscar empréstimo por item destino:', error)
        throw error
      })
  },

  /**
   * Lista todos os itens que foram recebidos via empréstimo aprovado
   */
  listarItensEmprestados: () => {
    return API.get('/api/emprestimos/itens-emprestados')
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar itens emprestados recebidos:', error)
        throw error
      })
  },
}
