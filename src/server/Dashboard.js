import { API } from './ApiConfig'

export default {
  obterResumo: (loja_id = null) => {
    const params = loja_id ? { loja_id } : {}
    return API.get('/api/dashboard/resumo', { params })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao obter resumo do dashboard:', error)
        throw error
      })
  },

  obterComparativoLojas: () => {
    return API.get('/api/dashboard/comparativo-lojas')
      .then(response => response)
      .catch(error => {
        console.error('Erro ao obter comparativo de lojas:', error)
        throw error
      })
  },
}
