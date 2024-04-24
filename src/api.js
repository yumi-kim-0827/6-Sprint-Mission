export async function getProducts({ order = "recent", limit = 10 }) {
  const query = `orderBy=${order}&pageSize=${limit}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const result = await response.json();
  return result;
}
