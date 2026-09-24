import { API } from './ApiConfig'

export default {
  listar: (loja_id = null) => {
    const params = loja_id ? { loja_id } : {}
    return API.get('/api/usuarios', { params })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar usuários:', error)
        throw error
      })
  },

  buscarPorId: id => {
    return API.get(`/api/usuarios/${id}`)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao buscar usuário:', error)
        throw error
      })
  },

  criar: dados => {
    return API.post('/api/usuarios', dados)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao criar usuário:', error)
        throw error
      })
  },

  atualizar: (id, dados) => {
    return API.put(`/api/usuarios/${id}`, dados)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao atualizar usuário:', error)
        throw error
      })
  },

  listarLojas: () => {
    return API.get('/api/auth/lojas')
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar lojas:', error)
        throw error
      })
  },

  listarTodosMenus: () => {
    return API.get('/api/menus')
      .then(response => response)
      .catch(error => {
        console.error('Erro ao listar menus do sistema:', error)
        throw error
      })
  },

  listarMenusUsuario: id => {
    return API.get(`/api/usuarios/${id}/menus`)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao buscar menus do usuário:', error)
        throw error
      })
  },

  salvarMenusUsuario: (id, menus) => {
    return API.put(`/api/usuarios/${id}/menus`, { menus })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao salvar menus do usuário:', error)
        throw error
      })
  },

  listarHorariosUsuario: id => {
    return API.get(`/api/usuarios/${id}/horarios`)
      .then(response => response)
      .catch(error => {
        console.error('Erro ao buscar horários do usuário:', error)
        throw error
      })
  },

  salvarHorariosUsuario: (id, horarios) => {
    return API.put(`/api/usuarios/${id}/horarios`, { horarios })
      .then(response => response)
      .catch(error => {
        console.error('Erro ao salvar horários do usuário:', error)
        throw error
      })
  },
}
