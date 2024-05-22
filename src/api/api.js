const panda_market_backend_api = "https://panda-market-api.vercel.app/";

const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await fetch(panda_market_backend_api + `products?${query}`);

  if (response.status >= 400 && response.status < 600) {
    throw new Error("서버 에러가 발생했습니다");
  }
  const products = await response.json();
  return products;
};

const getProduct = async ({
  productId,
}) => {
  const response = await fetch(panda_market_backend_api + `products/${productId}`);

  if (response.status >= 400 && response.status < 600) {
    throw new Error("서버 에러가 발생했습니다");
  }
  const products = await response.json();
  return products;
};

const getComments = async ({
  productId,
}) => {
  const response = await fetch(panda_market_backend_api + `products/${productId}/comments?limit=3`);

  if (response.status >= 400 && response.status < 600) {
    throw new Error("서버 에러가 발생했습니다");
  }
  const products = await response.json();
  return products;
};

export { getProducts, getProduct, getComments };
