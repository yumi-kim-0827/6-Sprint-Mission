import { IApiOption } from "@/pages/boards";

const API_URL = "https://panda-market-api.vercel.app";

export const getArticlesApi = async (option: IApiOption) => {
  const params = new URLSearchParams(option);
  const response = await fetch(`${API_URL}/articles?${params}`);
  console.log(params, "params");
  const body = await response.json();
  return body;
};
