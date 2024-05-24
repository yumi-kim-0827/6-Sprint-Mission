import { ProductInfo } from "../types/ProductInfo";
import axiosInstance from "./axios";

const getItemInfoById = async (url: string): Promise<ProductInfo> => {
  try {
    const res = await axiosInstance.get<ProductInfo>(url);
    return res.data;
  } catch (e) {
    console.log("Failed to get data");
    throw e;
  }
};

export default getItemInfoById;
