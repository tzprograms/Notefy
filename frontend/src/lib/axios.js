import axios from "axios";

// handling production URL , since localhost wont work
const BASE_URL = import.meta.env.mode === "development" ? "http://localhost:5001/api" :  "/api"
const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;