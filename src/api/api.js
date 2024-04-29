export async function getProduct(order = {}) {
  const query = new URLSearchParams(order).toString();

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/docs/#/?${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
