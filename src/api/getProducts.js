import axios from "axios";
import { API_URL } from "../constants/apiConfig";

const getProducts = (params = {}) => {
  return axios
    .get(API_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.error("Failed data call", error);
      throw error;
    });
};

export default getProducts;
