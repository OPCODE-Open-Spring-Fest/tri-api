
import axios from 'axios'

const imdbInstance = axios.create({
  baseURL: 'https://imdb146.p.rapidapi.com/v1',
  headers: {
    'X-RapidAPI-Key': 'fb50c93a1cmsh09e5e23ca2cef98p1aa82fjsncd2ecfe53965',
    'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
  }
})

export default imdbInstance
