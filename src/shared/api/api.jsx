export async function getDatum({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products${query}`
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const data = await response.json();
  return data;
}
