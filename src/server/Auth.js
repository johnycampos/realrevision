/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
import { API } from './ApiConfig'

export default {
  logar: (login, senha) =>
    API.post(
      '/api/auth/login',
      { username: login, password: senha },
      {
        headers: { 'g-recaptcha-response': 'teste' },
        transformResponse: [
          function (data) {

            // Tente logar o data recebido para ver o que está vindo
            console.log('Raw response data:', data)
  
            // Tente parsear o data
            let result
            try {
              result = JSON.parse(data)
            } catch (e) {
              console.error('Error parsing response data:', e)
              
              return data  // Retorne o data original em caso de erro
            }
  
            // Verifique e retorne o resultado
            if (result && result.status === 200) {
              return result
            }
  
            // Se não corresponder aos critérios, retorne o data original
            return result
          },
        ],
      },
    ).then(response => {
      // Logar a resposta completa para depuração
      console.log('Full response:', response)
      
      return response
    }).catch(error => {
      console.error('Error in API call:', error)
      throw error
    }),
  

}
