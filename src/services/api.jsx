export async function getItems({ order = 'createdAt', offset = 0, limit = 10 }) {
  const query = `order=${order}`;
  const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
  const body = await response.json();
  return body;
}
