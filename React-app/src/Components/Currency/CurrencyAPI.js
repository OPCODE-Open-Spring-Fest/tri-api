

import axios from 'axios'

const currencyInstance = axios.create({
  baseURL: 'https://currency-converter18.p.rapidapi.com/api/v1',
  headers: {
    'X-RapidAPI-Key': 'fb50c93a1cmsh09e5e23ca2cef98p1aa82fjsncd2ecfe53965',
    'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
  }
})

export default currencyInstance
