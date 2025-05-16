import axios from "./instancia";



export const enviaCrud = (data) => axios.post(`/crud`, data);

export const traeCrud = () => axios.get(`/crud`);

export const eliminarCrud = (id) => axios.delete(`/crud/${id}`);

export const editarCrud = (id, data) => axios.put(`/crud/${id}`, data);

export const traerUnoCrud = (id) => axios.get(`/crud/${id}`);
