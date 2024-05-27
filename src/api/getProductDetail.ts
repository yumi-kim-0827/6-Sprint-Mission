import axios from "axios";
import { API_URL } from "../constants/apiConfig";
import { Product } from "../types";

const getProductDetail = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get<Product>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed product detail data call", error);
    throw error;
  }
};

export default getProductDetail;
