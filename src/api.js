export async function getItems({ order, page = "1", pageSize = "10" }) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?orderBy=${order}&page=${page}&pageSize=${pageSize}`
  );
  const body = await response.json();
  return body;
}
