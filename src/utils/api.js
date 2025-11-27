import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_API_URL + ":" + process.env.NEXT_PUBLIC_API_PORT;

const api = axios.create({
  baseURL: apiURL,
});

export default api;