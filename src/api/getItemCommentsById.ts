import axiosInstance from "./axios";
import { Comments } from "../types";
import { getEffectiveTypeParameterDeclarations } from "typescript";

type ResponseBody = {
  nextCursor: number;
  list: Comments[];
};

const getItemCommentsById = async (url: string): Promise<ResponseBody> => {
  try {
    const res = await axiosInstance.get<ResponseBody>(url);
    return res.data;
  } catch (e) {
    console.log("Failed to get data");
    throw e;
  }
};

export default getItemCommentsById;
