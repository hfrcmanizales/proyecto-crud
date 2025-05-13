import axios from "./instancia";
const API_URL = import.meta.env.VITE_API_URL;


export const enviaData = (data) => axios.post(`${API_URL}/register`, data);

export const loginData = (data) => axios.post(`${API_URL}/login`, data);

export const verifityData = () => axios.get(`${API_URL}/verifity`);
