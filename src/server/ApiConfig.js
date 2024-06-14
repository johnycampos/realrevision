import axios from 'axios'

const API_URL = 'http://localhost:5000'

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

// API.interceptors.request.use(
//   config => {
//     // Do something before request is sent

//     const accessToken = localStorage.getItem('token')

//     // eslint-disable-next-line no-param-reassign
//     if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
//     config.headers.dataSession = localStorage.getItem('data')

//     return config
//   },
//   error => Promise.reject(error),
// )

export { API, API_URL }

