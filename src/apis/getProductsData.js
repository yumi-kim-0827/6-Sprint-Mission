const PRODUCTS_URL = "https://panda-market-api.vercel.app/products";

export default async function getProductsData({
  order = "recent",
  page = 1,
  pageSize = 10,
  keyword = "",
}) {
  const query = new URLSearchParams({
    orderBy: order,
    page,
    pageSize,
    keyword,
  }).toString();
  const url = `${PRODUCTS_URL}?${query}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("상품을 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
