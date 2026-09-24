import { API } from './ApiConfig'

export default {
  criarVenda: dados => {
    return API.post('/api/vendas', dados)
      .then(response => {
        return response
      })
      .catch(error => {
        console.error('Erro ao criar venda:', error)
        throw error
      })
  },

  listarVendas: (filtros = {}) => {
    return API.get('/api/vendas', { params: filtros })
      .then(response => {
        return response
      })
      .catch(error => {
        console.error('Erro ao listar vendas:', error)
        throw error
      })
  },
}
