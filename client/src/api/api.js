import axios from 'axios';

const api = axios.create({
    baseURL: 'https://coll-o.vercel.app/api',
    withCredentials: true
});

export default api;