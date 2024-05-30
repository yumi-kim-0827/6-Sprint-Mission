import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app/products?page=1&orderBy=recent",
});

export default instance;
