import axios from 'axios';

const api = axios.create({
    baseULR: 'http://localhost:3333',
})

export default api;