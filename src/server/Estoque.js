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
  },

  listarGrupos: () => {
    // Obtém o token do localStorage
    const token = JSON.parse(localStorage.getItem('accessToken'))
    
    return API.get(
      '/api/grupos',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    ).then(response => {
     
      // Garante que estamos retornando os dados no formato correto
      return {
        data: Array.isArray(response.data) ? response.data : []
      }
    }).catch(error => {
      console.error('Erro ao listar grupos:', error)
      throw error
    })
  },

  listarSubGrupos: () => {
    // Obtém o token do localStorage
    const token = JSON.parse(localStorage.getItem('accessToken'))
    
    return API.get(
      '/api/subgrupos',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    // eslint-disable-next-line sonarjs/no-identical-functions
    ).then(response => {     
      // Garante que estamos retornando os dados no formato correto
      return {
        data: Array.isArray(response.data) ? response.data : []
      }
    }).catch(error => {
      console.error('Erro ao listar subgrupos:', error)
      throw error
    })
  },

  listarUnidades: () => {
    // Obtém o token do localStorage
    const token = JSON.parse(localStorage.getItem('accessToken'))
    
    return API.get(
      '/api/unidades',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    // eslint-disable-next-line sonarjs/no-identical-functions
    ).then(response => {     
      // Garante que estamos retornando os dados no formato correto
      return {
        data: Array.isArray(response.data) ? response.data : []
      }
    }).catch(error => {
      console.error('Erro ao listar subgrupos:', error)
      throw error
    })
  },

  listarFabricantes: () => {
    // Obtém o token do localStorage
    const token = JSON.parse(localStorage.getItem('accessToken'))
    
    return API.get(
      '/api/fabricantes',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    // eslint-disable-next-line sonarjs/no-identical-functions
    ).then(response => {     
      // Garante que estamos retornando os dados no formato correto
      return {
        data: Array.isArray(response.data) ? response.data : []
      }
    }).catch(error => {
      console.error('Erro ao listar fabricantes:', error)
      throw error
    })
  },
  
  listarLocalEstoque: () => {
    // Obtém o token do localStorage
    const token = JSON.parse(localStorage.getItem('accessToken'))
    
    return API.get(
      '/api/locais-estoque',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    // eslint-disable-next-line sonarjs/no-identical-functions
    ).then(response => {     
      // Garante que estamos retornando os dados no formato correto
      return {
        data: Array.isArray(response.data) ? response.data : []
      }
    }).catch(error => {
      console.error('Erro ao listar local_estoque:', error)
      throw error
    })
  },

  atualizarItem: (id, item) => {
    // Obtém o token do localStorage
    const token = JSON.parse(localStorage.getItem('accessToken'))
    
    return API.put(
      `/api/itens/${id}`,
      {
        codigo: item.codigo,
        nome: item.nome,
        nome_curto: item.nome_curto,
        grupo_id: item.grupo_id,
        subgrupo_id: item.subgrupo_id,
        custo_compra: item.custo_compra,
        percentual_lucro: item.percentual_lucro,
        valor: item.valor,
        preco_consumidor: item.preco_consumidor,
        preco_revenda: item.preco_revenda,
        preco_outros: item.preco_outros,
        quantidade_disponivel: item.quantidade_disponivel,
        lote_ideal: item.lote_ideal,
        quantidade_minima: item.quantidade_minima,
        unidade_id: item.unidade_id,
        fabricante_id: item.fabricante_id,
        local_estoque_id: item.local_estoque_id,
        gaveta: item.gaveta,
        observacoes: item.observacoes
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    ).then(response => {
      return response
    }).catch(error => {
      console.error('Erro ao atualizar item:', error)
      throw error
    })
  },

  criarItem: item => {
    // Obtém o token do localStorage
    const token = JSON.parse(localStorage.getItem('accessToken'))
    
    return API.post(
      '/api/itens',
      {
        codigo: item.codigo,
        nome: item.nome,
        nome_curto: item.nome_curto,
        grupo_id: item.grupo_id,
        subgrupo_id: item.subgrupo_id,
        custo_compra: item.custo_compra,
        percentual_lucro: item.percentual_lucro,
        valor: item.valor,
        preco_consumidor: item.preco_consumidor,
        preco_revenda: item.preco_revenda,
        preco_outros: item.preco_outros,
        quantidade_disponivel: item.quantidade_disponivel,
        lote_ideal: item.lote_ideal,
        quantidade_minima: item.quantidade_minima,
        unidade_id: item.unidade_id,
        fabricante_id: item.fabricante_id,
        local_estoque_id: item.local_estoque_id,
        gaveta: item.gaveta,
        observacoes: item.observacoes
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    ).then(response => {
      return response
    }).catch(error => {
      console.error('Erro ao criar item:', error)
      throw error
    })
  },

  criarGrupo: grupo => {
    // Obtém o token do localStorage
    const token = JSON.parse(localStorage.getItem('accessToken'))
    
    return API.post(
      '/api/grupos',
      {
        nome: grupo.nome,
        descricao: grupo.descricao
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    ).then(response => {
      return response
    }).catch(error => {
      console.error('Erro ao criar grupo:', error)
      throw error
    })
  }
} 
