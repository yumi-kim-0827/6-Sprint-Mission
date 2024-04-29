import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
  timeout: 5000,
});

export default axiosInstance;
