import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app/docs/#/",
});

export default instance;
