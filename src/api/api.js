export async function getProducts({ orderBy, pageSize }) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?orderBy=${orderBy}&pageSize=${pageSize}`
  );
  const body = await response.json();
  return body;
}
