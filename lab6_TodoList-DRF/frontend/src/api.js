import axios from "axios";

const API = axios.create({
	baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
});

export const fetchTodos = () => API.get("/todos/");
export const createTodo = (data) => API.post("/todos/", data);
export const updateTodo = (id, data) => API.patch(`/todos/${id}/`, data);
export const deleteTodo = (id) => API.delete(`/todos/${id}/`);
