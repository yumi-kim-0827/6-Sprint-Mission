const PRODUCTS_URL = "https://panda-market-api.vercel.app/products";

// 메인 페이지에서 상품들의 데이터를 page, order, keyword에 맞게 받습니다.
export async function getProductsData({
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

// 상품 상세페이지에서 데이터를 받습니다.
export async function getProductData(productId) {
  const url = `${PRODUCTS_URL}/${productId}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("상품을 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

// 상품에 대한 문의사항을 받습니다.
export async function getProductComments(productId, { limit = 3 }) {
  const query = new URLSearchParams({
    limit,
  }).toString();
  const url = `${PRODUCTS_URL}/${productId}/comments?${query}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("상품을 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
