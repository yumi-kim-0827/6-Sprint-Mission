export async function getProducts({
  page = 1,
  pageSize = 10,
  order = "",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&order=${order}&keyword=${keyword}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );

  const body = await response.json();
  return body.list;
}
