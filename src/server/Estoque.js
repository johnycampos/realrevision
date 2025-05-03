import { API } from './ApiConfig'

export default {
  listarItens: () => {
    // Obtém o token do localStorage
    const token = JSON.parse(localStorage.getItem('accessToken'))
    
    return API.get(
      '/api/itens',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    ).then(response => {
      return response
    }).catch(error => {
      console.error('Erro ao listar itens:', error)
      throw error
    })
  }
} 
