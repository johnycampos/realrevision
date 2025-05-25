import { API } from './ApiConfig'

export default {
  criarVenda: dados => {
    // Obtém o token do localStorage
    const token = JSON.parse(localStorage.getItem('accessToken'))
    
    return API.post(
      '/api/vendas',
      dados,
      {
        headers: {
          'Authorization': `${token}`
        }
      }
    ).then(response => {
      return response
    }).catch(error => {
      console.error('Erro ao criar venda:', error)
      throw error
    })
  }
} 
