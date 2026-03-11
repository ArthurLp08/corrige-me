import axios from "axios";

const api = axios.create({
    baseURL: 'https://corrigeme-api.onrender.com'
});

export default api;