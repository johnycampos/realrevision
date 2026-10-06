import { API } from './ApiConfig'

export default {
  listarItens: (loja_id = null) => {
    const params = loja_id ? { loja_id } : {}

    return API.get('/api/itens', { params })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar itens:', error)
        throw error
      })
  },

  listarGrupos: () => {
    return API.get('/api/grupos')
      .then(response => {
        return {
          data: Array.isArray(response.data) ? response.data : []
        }
      })
      .catch(error => {
        console.error('Erro ao listar grupos:', error)
        throw error
      })
  },

  listarSubgrupos: grupoId => {
    if (!Number.isInteger(Number(grupoId)) || Number(grupoId) <= 0)
      return Promise.resolve({ data: [] })

    return API.get(`/api/subgrupos/grupo/${grupoId}`)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar subgrupos:', error)
        throw error
      })
  },

  listarUnidades: () => {
    return API.get('/api/unidades')
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar unidades:', error)
        throw error
      })
  },

  listarFabricantes: () => {
    return API.get('/api/fabricantes')
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar fabricantes:', error)
        throw error
      })
  },

  listarLocalEstoque: () => {
    return API.get('/api/locais-estoque')
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar locais de estoque:', error)
        throw error
      })
  },

  atualizarItem: (id, item) => {
    return API.put(`/api/itens/${id}`, {
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
    })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao atualizar item:', error)
        throw error
      })
  },

  criarItem: item => {
    return API.post('/api/itens', {
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
    })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao criar item:', error)
        throw error
      })
  },

  criarGrupo: grupo => {
    return API.post('/api/grupos', {
      nome: grupo.nome,
      descricao: grupo.descricao
    })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao criar grupo:', error)
        throw error
      })
  },

  criarSubgrupo: subgrupo => {
    return API.post('/api/subgrupos', {
      nome: subgrupo.nome,
      descricao: subgrupo.descricao,
      grupo_id: subgrupo.grupo_id
    })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao criar subgrupo:', error)
        throw error
      })
  },

  criarUnidade: unidade => {
    return API.post('/api/unidades', {
      nome: unidade.nome,
      descricao: unidade.descricao,
      sigla: unidade.sigla
    })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao criar unidade:', error)
        throw error
      })
  },

  criarFabricante: fabricante => {
    return API.post('/api/fabricantes', {
      nome: fabricante.nome,
      cnpj: fabricante.cnpj,
      contato: fabricante.contato,
      telefone: fabricante.telefone,
      email: fabricante.email,
      observacoes: fabricante.observacoes
    })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao criar fabricante:', error)
        throw error
      })
  },

  criarLocalEstoque: localEstoque => {
    return API.post('/api/locais-estoque', {
      nome: localEstoque.nome,
      descricao: localEstoque.descricao,
      endereco: localEstoque.endereco
    })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao criar local de estoque:', error)
        throw error
      })
  },

  atualizarEstoque: (id, dados) => {
    return API.patch(`/api/itens/${id}/estoque`, {
      quantidade: dados.quantidade,
      operacao: dados.operacao
    })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao atualizar estoque:', error)
        throw error
      })
  },

  // Fornecedores (catálogo global)
  listarFornecedoresCatalogo: () => {
    return API.get('/api/fornecedores')
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar fornecedores:', error)
        throw error
      })
  },

  criarFornecedorCatalogo: dados => {
    return API.post('/api/fornecedores', dados)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao criar fornecedor:', error)
        throw error
      })
  },

  atualizarFornecedorCatalogo: (id, dados) => {
    return API.put(`/api/fornecedores/${id}`, dados)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao atualizar fornecedor:', error)
        throw error
      })
  },

  deletarFornecedorCatalogo: id => {
    return API.delete(`/api/fornecedores/${id}`)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao deletar fornecedor:', error)
        throw error
      })
  },

  // Vínculos Item <-> Fornecedores
  listarFornecedoresDoItem: itemId => {
    return API.get(`/api/itens/${itemId}/fornecedores`)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar fornecedores do item:', error)
        throw error
      })
  },

  vincularFornecedor: (itemId, fornecedorId) => {
    return API.post(`/api/itens/${itemId}/fornecedores`, { fornecedor_id: fornecedorId })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao vincular fornecedor ao item:', error)
        throw error
      })
  },

  desvincularFornecedor: (itemId, fornecedorId) => {
    return API.delete(`/api/itens/${itemId}/fornecedores/${fornecedorId}`)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao desvincular fornecedor do item:', error)
        throw error
      })
  },

  // Consulta de auditoria de estoque (Fase 8)
  listarLogsEstoque: (params = {}) => {
    return API.get('/api/audit-log', { params })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar logs de estoque:', error)
        throw error
      })
  }
}
