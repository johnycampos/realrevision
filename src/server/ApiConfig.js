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
export { API, API_URL }

