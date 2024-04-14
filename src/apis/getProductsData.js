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
    throw new Error("리뷰를 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
