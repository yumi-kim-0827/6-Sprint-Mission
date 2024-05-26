import { AxiosError } from "axios";
import { instance } from "./Axios";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  tags: string[];
  favoriteCount: number;
};

const fetchData = async <T>(url: string): Promise<T | undefined> => {
  try {
    const response = await instance.get<T>(url);
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

export const getProductById = (
  productId: string
): Promise<Product | undefined> => {
  return fetchData<Product>(`/products/${productId}`);
};
