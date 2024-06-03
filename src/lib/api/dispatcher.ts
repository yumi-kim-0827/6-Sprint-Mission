import axios, { AxiosRequestConfig } from "axios";
import { APP_BASE_URL } from "@/constants/common";

export const axiosInstance = axios.create({
  baseURL: APP_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const dispatcher = async (options: AxiosRequestConfig) => {
  const client = axiosInstance({ ...options });
  await client;
  return client;
};

export default dispatcher;
