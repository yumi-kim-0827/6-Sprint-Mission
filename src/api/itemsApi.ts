export async function getProducts(params = {}) {

  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
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

export async function getProductDetail(productId: any | number) {
  // 근데 productId로 숫자 넘기니까 타입을 number로 지정해야되지 않나?
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}`
  );
  const body = await response.json();
  return body;
}

export async function getProductComment(productId: any | number) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}/comments?limit=3`
  );
  const body = await response.json();
  return body;
}