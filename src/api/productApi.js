export const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
}) => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;

  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error('상품 불러오기 실패');
  }
  const body = await response.json();
  return body;
};

export const getProductById = async (productId) => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}`
  );
  if (!response.ok) {
    throw new Error('상품 정보를 가져오는데 실패했습니다.');
  }
  const product = await response.json();
  return product;
};
