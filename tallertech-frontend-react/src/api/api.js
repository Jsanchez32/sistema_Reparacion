/* API helper con axios. Centraliza todas las llamadas HTTP.
   Cambia BASE_URL por el endpoint donde corre tu backend (Node/Servlets).
*/
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});

// Ejemplo de funciones que usamos en los componentes
export const getUsers = () => api.get("/usuarios");
export const createUser = (user) => api.post("/usuarios", user);
export const updateUser = (id, user) => api.put(`/usuarios/${id}`, user);
export const deleteUser = (id) => api.delete(`/usuarios/${id}`);

export default api;
