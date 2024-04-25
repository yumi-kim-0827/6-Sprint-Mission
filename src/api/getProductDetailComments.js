import axios from "axios";
import { API_URL } from "../constants/apiConfig";

const getProductDetailComments = (id, limit = 10) =>
  axios
    .get(`${API_URL}/${id}/comments?limit=${limit}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Failed product detail comments data call", error);
      throw error;
    });

export default getProductDetailComments;
