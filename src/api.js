import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://panda-market-api.vercel.app/products",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
