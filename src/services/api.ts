import axios from 'axios'

const api = axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=87b1bc4a&",
  headers: {'Content-Type': 'application/json'},
})

export default api;