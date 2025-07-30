import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL
const production = ''
const api = axios.create({
    baseURL : `${baseURL}/api`
})

export default api