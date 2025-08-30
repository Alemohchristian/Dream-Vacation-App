import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

export const submitForm = (data) => API.post("/submit", data);
