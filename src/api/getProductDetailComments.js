import axios from "axios";
import { API_URL } from "../constants/apiConfig";

const getProductDetailComments = (id, limit = 10) => {
  console.log("댓글 호출 함수: ", `${API_URL}/${id}/comments?limit=${limit}`);
  return axios
    .get(`${API_URL}/${id}/comments?limit=${limit}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Failed product detail comments data call", error);
      throw error;
    });
};

export default getProductDetailComments;
