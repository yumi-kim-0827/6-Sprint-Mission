import { IApiOption, IBestApiOption } from "@/pages/boards";

const API_URL = "https://panda-market-api.vercel.app";

export const getArticlesApi = async (option: IApiOption | IBestApiOption) => {
  const params = new URLSearchParams(option);
  const response = await fetch(`${API_URL}/articles?${params}`);
  const body = await response.json();
  return body;
};
