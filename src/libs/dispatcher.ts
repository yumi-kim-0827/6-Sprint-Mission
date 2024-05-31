import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

type Dispatcher = <T>(
  options: AxiosRequestConfig<T>,
) => Promise<AxiosResponse<T>>;

const dispatcher: Dispatcher = async (options) => {
  const result = axiosInstance({ ...options });

  await result;
  return result;
};

export default dispatcher;
