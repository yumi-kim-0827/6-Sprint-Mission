export async function getProduct(order = "recent") {
  let query = `orderBy=${order}`;
  if (order !== "recent" && order !== "favorite") {
    query = `keyword=${order}`;
  }
  const response = await fetch(`https://panda-market-api.vercel.app/products/?${query}`);
  const data = response.json();
  return data;
}

export async function getBestProduct() {
  const response = await fetch(`https://panda-market-api.vercel.app/products/?orderBy=favorite`);
  const data = response.json();
  return data;
}
