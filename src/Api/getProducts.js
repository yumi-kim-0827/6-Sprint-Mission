import { Axios } from "./Axios";

export const getProducts = async () => {
  try {
    const response = await Axios.get("/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
