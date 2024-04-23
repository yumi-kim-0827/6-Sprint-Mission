import { instance } from "./Axios";

export const getProductById = async (productId) => {
  try {
    const response = await instance.get(`/products/${productId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
