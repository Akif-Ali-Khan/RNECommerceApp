import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/benirvingplt/products',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
