import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
  headers: { "Content-Type": "application/json" },
});

export const fetchProducts = async () => {
  try {
    const response = await httpClient.get("/products");
    const data = response.data;
    if (data && data.list) {
      return data.list;
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const fetchProduct = async (productId) => {
  try {
    const response = await httpClient.get(`/products/${productId}`);
    const data = response.data;
    if (data) {
      return data;
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
};
