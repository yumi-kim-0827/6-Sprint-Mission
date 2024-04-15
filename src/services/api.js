export async function getItems() {
  try {
    const response = await fetch(
      "https://panda-market-api.vercel.app/products"
    );
    if (!response.ok) {
      throw new Error("상품 목록을 가져오는 데 실패했습니다.");
    }
    const items = await response.json();
    return items;
  } catch (error) {
    console.error("상품 목록을 가져오는 중 오류가 발생했습니다:", error);
    throw error;
  }
}
