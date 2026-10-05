import { API } from './ApiConfig'

export default {
  obterRelatorioComissao: (params = {}) => {
    return API.get('/api/comissoes/relatorio', { params })
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao obter relatório de comissão:', error)
        throw error
      })
  },

  listarVendedores: (params = {}) => {
    return API.get('/api/comissoes/vendedores', { params })
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao listar vendedores:', error)
        throw error
      })
  },
}
