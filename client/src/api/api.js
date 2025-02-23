import axios from 'axios';

const api = axios.create({
    baseURL: 'https://coll-1vctsxqmq-atharvkasars-projects.vercel.app',
    withCredentials: true
});

export default api;