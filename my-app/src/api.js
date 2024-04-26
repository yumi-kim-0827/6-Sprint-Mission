export async function getProducts() {
  const response = await fetch("https://panda-market-api.vercel.app/products");
  const body = await response.json();
  return body;
}
export async function getProduct(productid = 18) {
  const productId = productid;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}`
  );
  if (!response.ok) {
    throw new Error("상품 정보를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
