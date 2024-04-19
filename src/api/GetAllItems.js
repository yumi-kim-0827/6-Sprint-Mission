export async function GetAllItems({
  order = "recent",
  pageNum = 1,
  pageSize = 10,
}) {
  const query = `page=${pageNum}&pageSize=${pageSize}&orderBy=${order}&`;
  const res = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const data = await res.json();
  return data;
}
