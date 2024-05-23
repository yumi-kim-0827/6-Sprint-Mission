import { AxiosError } from "axios";
import { instance } from "./Axios";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  tags: string[];
  favoriteCount: number;
}

export const getProductById = async (
  productId: string
): Promise<Product | undefined> => {
  try {
    const response = await instance.get<Product>(`/products/${productId}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Axios error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    return undefined;
  }
};
