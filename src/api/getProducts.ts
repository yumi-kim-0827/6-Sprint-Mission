import axios from "axios";
import { API_URL } from "../constants/apiConfig";
import { Product, GetProductsParams } from "../types";

const getProducts = async (params: GetProductsParams): Promise<Product> => {
  try {
    const response = await axios.get<Product>(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error("Failed data call", error);
    throw error;
  }
};

export default getProducts;
