import axios from 'axios'

const key = 'ADD_KEY'

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    Authorization: `Bearer ${key}`,
  },
})

export default api
