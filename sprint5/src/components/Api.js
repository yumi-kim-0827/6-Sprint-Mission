export async function getProducts(order = "createdAt") {
  const query = `${order}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const data = await response.json();
  return data.list;
}
