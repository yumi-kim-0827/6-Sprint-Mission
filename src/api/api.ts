import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const baseAxios = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
});
