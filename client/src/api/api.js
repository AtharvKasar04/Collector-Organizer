import axios from 'axios';

const api = axios.create({
    baseURL: 'https://coll-9550ocpmj-atharvkasars-projects.vercel.app/',
    withCredentials: true
});

export default api;