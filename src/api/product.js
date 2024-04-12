async function getProducts(order = "") {
  const query = `orderBy=${order}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const products = await response.json();
  return products.list;
}

export { getProducts };
