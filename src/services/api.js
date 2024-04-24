const BASE_URL = "https://panda-market-api.vercel.app";

export async function getItems() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
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

export async function getItem(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error("상품 정보를 가져오는 데 실패했습니다.");
    }
    const item = await response.json();
    return item;
  } catch (error) {
    console.error("상품 정보를 가져오는 중 오류가 발생했습니다:", error);
    throw error;
  }
}

export async function getItemComments(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}/comments`);
    if (!response.ok) {
      throw new Error("상품 댓글을 가져오는 데 실패했습니다.");
    }
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error("상품 댓글을 가져오는 중 오류가 발생했습니다:", error);
    throw error;
  }
}
