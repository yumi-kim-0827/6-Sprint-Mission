export async function getProducts(order = "recent", keyword = "") {
  const query = `orderBy=${order}&keyword=${keyword}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );

  const data = await response.json();
  console.log(data);
  return data.list;
}

export async function getBestProducts(order) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${order}`
  );

  const data = await response.json();
  console.log(data);
  return data.list;
}
