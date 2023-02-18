import axios from "axios";
// require('dotenv').config()
const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: 'http://localhost:8080/api/'
});

export default api;