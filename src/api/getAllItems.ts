import { Product } from "../types/Product";
import axiosInstance from "./axios";

type ResponseBody = {
  list: Product[];
  totalCount: number;
};

const getItems = async (url: string): Promise<ResponseBody> => {
  try {
    const res = await axiosInstance.get<ResponseBody>(url);
    return res.data;
  } catch (e) {
    console.log("Failed to get data");
    throw e;
  }
};

export default getItems;
