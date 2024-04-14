export async function getItems({order, pageSize, keyword=""}) {
  const query = `?orderBy=${order}&pageSize=${pageSize}&keyword=${keyword}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products${query}`
  );
  const body = await response.json();
  const list = body.list;

  return list;
}