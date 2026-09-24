import axios from 'axios'

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
})

// Interceptor para adicionar o cabeçalho Authorization com prefixo Bearer
axiosIns.interceptors.request.use(config => {
  const rawToken = localStorage.getItem('accessToken')
  if (rawToken) {
    let token = rawToken
    try {
      token = JSON.parse(rawToken)
    } catch (e) {
      // Já está em string pura
    }
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default axiosIns
