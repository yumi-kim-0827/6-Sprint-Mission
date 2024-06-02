import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const dispatcher = async (options) => {
  const client = axiosInstance({ ...options });

  await client;
  return client;
};
