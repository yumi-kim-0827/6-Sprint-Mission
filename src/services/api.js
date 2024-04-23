export async function getItems({
  order = "recent",
  page = 1, // 페이지 번호
  pageSize = 10, // 페이지 당 상품 수
  keyword = "",
}) {
  const query = `orderBy=${order}&page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error("리뷰를 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function getItem(id) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${id}`
  );
  if (!response.ok) {
    throw new Error("상품 상세 데이터를 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
