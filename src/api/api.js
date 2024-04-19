const PRODUCTS_URL = "https://panda-market-api.vercel.app/products";

export async function getItems({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(`${PRODUCTS_URL}?${query}`);
  const data = await response.json();
  return data;
}
