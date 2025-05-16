import axios from "axios";

// Create a pre-configured Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000", // Your Express backend
});

export default api;
