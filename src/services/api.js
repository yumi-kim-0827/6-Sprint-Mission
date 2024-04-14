export async function getItems({
  order = "recent",
  page = 1,
  pageSize = 10,
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
