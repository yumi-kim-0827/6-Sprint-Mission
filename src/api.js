export async function getProduct(productId){
  try{
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}`
    );
    if(!response.ok) {
      throw newError(`HTTP error: ${response.status}`);
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Failed to fetch product:".error);
    throw error;
  }
}