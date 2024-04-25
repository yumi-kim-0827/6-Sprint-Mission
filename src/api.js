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

export const fetchProductComments = async (productId, limit = 10) => {
  try {
    const response = await httpClient.get(
      `/products/${productId}/comments?limit=${limit}`
    );
    const data = response.data;
    if (data && Array.isArray(data.list)) {
      return data.list;
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error) {
    throw new Error("Failed to fetch product comments");
  }
};

export const addProductComment = async (productId, comment) => {
  try {
    const response = await httpClient.post(
      `/products/${productId}/comments`,
      comment
    );
    const data = response.data;
    if (data) {
      return data;
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error) {
    throw new Error("Failed to add product comment");
  }
};
