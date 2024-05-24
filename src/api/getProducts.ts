import axios from "axios";
import { API_URL } from "../constants/apiConfig";
import { Product, GetProductsParams } from "../types";

interface GetProductsResponse {
  list: Product[];
}

const getProducts = async (
  params: GetProductsParams
): Promise<GetProductsResponse> => {
  try {
    const response = await axios.get<GetProductsResponse>(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error("Failed data call", error);
    throw error;
  }
};

export default getProducts;
