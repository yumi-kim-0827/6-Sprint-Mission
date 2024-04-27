const BASE_URL = "https://panda-market-api.vercel.app";

// 상품 리스트 조회
export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("상품 데이터를 불러오는데 실패했습니다: ", error);
    throw error;
  }
}

// 상품 상세 정보 조회
export async function getProductDetail(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("상품의 상세 정보를 불러오는데 실패했습니다: ", error);
    throw error;
  }
}

// 상품별 댓글 조회
export async function getComments(productId) {
  try {
    const response = await fetch(
      `${BASE_URL}/products/${productId}/comments?limit=3`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("상품의 댓글 정보를 불러오는데 실패했습니다: ", error);
    throw error;
  }
}
