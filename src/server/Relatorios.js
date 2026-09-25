import { API } from './ApiConfig'

export default {
  /**
   * Obtém dados do relatório de vendas
   * @param {Object} params - { loja_id, data_inicio, data_fim }
   */
  obterRelatorioVendas: (params = {}) => {
    return API.get('/api/relatorios/vendas', { params })
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao obter relatório de vendas:', error)
        throw error
      })
  },

  /**
   * Obtém dados do relatório de estoque
   * @param {Object} params - { loja_id }
   */
  obterRelatorioEstoque: (params = {}) => {
    return API.get('/api/relatorios/estoque', { params })
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao obter relatório de estoque:', error)
        throw error
      })
  },
}
