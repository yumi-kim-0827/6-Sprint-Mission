const API_URL = "https://panda-market-api.vercel.app";

export const getArticlesApi = async () => {
  const response = await fetch(`${API_URL}/articles`);
  const body = await response.json();
  return body;
};
