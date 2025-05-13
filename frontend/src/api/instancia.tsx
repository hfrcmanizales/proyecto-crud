import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND;

// Crear una instancia personalizada
const Instance = axios.create({
  baseURL: apiUrl,  // Cambia esto a la URL de tu API
  withCredentials: true                 // Importante para enviar/recibir cookies
  
});

export default Instance