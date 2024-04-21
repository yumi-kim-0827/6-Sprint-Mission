const BASE_URL = "https://panda-market-api.vercel.app";

export const getProducts = async ({ page, pageSize, orderBy }) => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(`${BASE_URL}/products?${query}`);
  const body = await response.json();
  const list = await body["list"];
  return list;
};
