export async function getProduct(order = {}) {
  const query = new URLSearchParams(order).toString();

  const response = await fetch(
    `https://panda-market-api.vercel.app/docs/#/?${query}`
  );
  const body = await response.json();
  return body;
}
