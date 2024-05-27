import axios, { AxiosInstance } from "axios";

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
