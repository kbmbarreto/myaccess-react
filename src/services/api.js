import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8004/myaccess/v2/'
})

export default api;