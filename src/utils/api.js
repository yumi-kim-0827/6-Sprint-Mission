export async function getProducts({
  page = 1,
  pageSize = 10,
  order = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${keyword}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error("제품 정보를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  console.log(body);
  return body;
}
