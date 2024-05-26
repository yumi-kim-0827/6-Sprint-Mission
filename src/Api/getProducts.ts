import { AxiosError } from "axios";
import { instance } from "./Axios";

export type Product = {
  totalCount: number;
  list: List[];
};

export type List = {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  favoriteCount: number;
  createdAt: string;
  ownerId: number;
};

async function fetchData<T>(url: string): Promise<T | undefined> {
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
}

export const getProducts = (): Promise<Product | undefined> => {
  return fetchData<Product>("/products");
};
