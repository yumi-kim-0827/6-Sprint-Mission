import axios from "axios";
import { API_URL } from "../constants/apiConfig";

const getProductDetail = id => {
  return axios
    .get(`${API_URL}/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Failed product detail data call", error);
      throw error;
    });
};

export default getProductDetail;
