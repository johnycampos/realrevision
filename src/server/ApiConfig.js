import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const API = axios.create({
  baseURL: API_URL,
  timeout: 60000,
  headers: {
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Permissions-Policy':
      'geolocation=(self), midi=(self), push=(self), sync-xhr=(self), speaker=(self), fullscreen=(self)',
    'Access-Control-Allow-Origin': API_URL,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
})

// Interceptor para injetar Authorization Bearer
API.interceptors.request.use(config => {
  const rawToken = localStorage.getItem('accessToken')
  if (rawToken) {
    let token = rawToken
    try {
      token = JSON.parse(rawToken)
    } catch (e) {
      // Já é string pura
    }
    config.headers = config.headers || {}
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`
    } else if (!config.headers.Authorization.startsWith('Bearer ')) {
      config.headers.Authorization = `Bearer ${config.headers.Authorization}`
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

export { API, API_URL }
