async function getProducts(order = "recent", size = "") {
  const query = `?${`orderBy=${order}`}${size && `&pageSize=${size}`}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products${query}`
  );
  const products = await response.json();
  return products.list;
}

export { getProducts };
