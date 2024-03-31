
import axios from 'axios'

const carsInstance = axios.create({
  baseURL: 'https://car-data.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '5054c32d57mshf26640e5ce6cf53p1df977jsn6a11a5f4d946',
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  },
})



export default carsInstance
