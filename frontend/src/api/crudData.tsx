import axios from "./instancia";

const API_URL = import.meta.env.VITE_API_URL;


export const enviaCrud = (data) => axios.post(`${API_URL}/crud`, data);

export const traeCrud = () => axios.get(`${API_URL}/crud`);

export const eliminarCrud = (id) => axios.delete(`${API_URL}/crud/${id}`);

export const editarCrud = (id, data) => axios.put(`${API_URL}/crud/${id}`, data);

export const traerUnoCrud = (id) => axios.get(`${API_URL}/crud/${id}`);
