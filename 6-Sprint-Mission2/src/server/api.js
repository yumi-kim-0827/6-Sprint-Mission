export async function products() {
  const response = await fetch("https://panda-market-api.vercel.app/products");
  const body = await response.json();
  return body;
}
