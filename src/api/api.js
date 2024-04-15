export async function getItems({order, page, pageSize, keyword=""}) {
  const query = `?orderBy=${order}&page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products${query}`
  );
  const body = await response.json();
  console.log(body);
  return body;
}