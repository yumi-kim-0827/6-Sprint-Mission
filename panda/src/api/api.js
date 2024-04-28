export default async function getItems(params = {}) {
  const query = new URLSearchParams(params).toString();
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    );
    const body = await response.json();
    return body;
  } catch (error) {
    console.log("can't fetch items");
    throw error;
  }
}
