import axios from "axios";

const API = axios.create({
  baseURL: "http://54.208.44.14:5000/api",
});

export const getItems = () => API.get("/items");
export const createItem = (data) => API.post("/items", data);
export const updateItem = (id, data) => API.put(`/items/${id}`, data);
export const deleteItem = (id) => API.delete(`/items/${id}`);
