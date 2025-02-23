import axios from 'axios';

const api = axios.create({
    baseURL: 'https://collector-organizer.onrender.com',
    withCredentials: true
});

export default api;