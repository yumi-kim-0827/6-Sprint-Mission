export async function getProducts() {
  const response = await fetch("https://panda-market-api.vercel.app/products/");
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
