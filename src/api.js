const BASE_URL = "https://panda-market-api.vercel.app";

export const getProducts = async ({ page, pageSize, orderBy = "recent" }) => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(`${BASE_URL}/products?${query}`);
  if (!response.ok) {
    // TODO
  }
  const body = await response.json();
  return body;
};
