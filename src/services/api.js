import Axios from 'axios'
const api = Axios.create({
     baseURL: process.env.REACT_APP_URL_API
})

export default api;