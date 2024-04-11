export const getProducts = async () => {
  const response = await fetch("https://panda-market-api.vercel.app/products");
  const body = response.json();
  return body;
};
