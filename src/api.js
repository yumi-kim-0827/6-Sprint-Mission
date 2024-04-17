export async function getProducts({ order }) {
  const query = `orderBy=${order}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const result = await response.json();
  return result;
}
