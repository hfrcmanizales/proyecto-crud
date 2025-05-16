import axios from "./instancia";


export const enviaData = (data) => axios.post(`/register`, data);

export const loginData = (data) => axios.post(`/login`, data);

export const verifityData = () => axios.get(`/verifity`);
