import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_API_URL + ":" + process.env.NEXT_PUBLIC_API_PORTA;

const api = axios.create({
  baseURL: apiURL,
});

export default api;