export async function getProducts(
  order = "createdAt",
  startIndex = 0,
  itemsPerPage = 12
) {
  const query = `${order}&offset=${startIndex}&limit=${itemsPerPage}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const data = await response.json();
  return data.list;
}
