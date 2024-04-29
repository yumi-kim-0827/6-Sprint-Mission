export async function getProducts(params = {}) {
  // URLSearchParams을 이용하면 파라미터 값을 자동으로 쉽게 인코딩할 수 있어요.
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}

export async function getProductDetails(productId) {
  try {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

export async function getProductComments(productId, commentId) {
  try {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${productId}/${commentId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product comments');
    }
    const responseData = await response.json();

    // 'list' 키에 해당하는 배열을 반환합니다.
    return responseData.list || [];
  } catch (error) {
    console.error('Error fetching product comments:', error);
    throw error;
  }
}
