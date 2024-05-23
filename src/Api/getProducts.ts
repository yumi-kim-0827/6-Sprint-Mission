import { AxiosError } from "axios";
import { instance } from "./Axios";

interface Product {
  id: number;
  name: string;
}

export const getProducts = async (): Promise<Product[] | undefined> => {
  try {
    const response = await instance.get<Product[]>("/products");
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
