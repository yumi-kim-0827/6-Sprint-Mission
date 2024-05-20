import axios from "axios";

const apiUrl = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: apiUrl,
});

export default instance;
