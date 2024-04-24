import { instance } from "./Axios";

export const getComments = async (productId) => {
  try {
    const response = await instance.get(`/products/${productId}/comments`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
