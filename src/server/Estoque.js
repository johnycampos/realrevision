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
  }
} 
