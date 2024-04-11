export async function getProducts() {
  try {
    const response = await fetch(
      "https://panda-market-api.vercel.app/products"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default getProducts;
