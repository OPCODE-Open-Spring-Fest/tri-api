
import axios from 'axios'

const carsInstance = axios.create({
  baseURL: 'https://car-data.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'fb50c93a1cmsh09e5e23ca2cef98p1aa82fjsncd2ecfe53965',
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  },
})



export default carsInstance
