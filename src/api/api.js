const panda_market_backend_api = "https://panda-market-api.vercel.app/";

const get_products = async ({
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

const get_product = async ({
  productId,
}) => {
  const response = await fetch(panda_market_backend_api + `products/${productId}`);

  if (response.status >= 400 && response.status < 600) {
    throw new Error("서버 에러가 발생했습니다");
  }
  const products = await response.json();
  return products;
};

const get_comments = async ({
  productId,
}) => {
  const response = await fetch(panda_market_backend_api + `products/${productId}/comments?limit=3`);

  if (response.status >= 400 && response.status < 600) {
    throw new Error("서버 에러가 발생했습니다");
  }
  const products = await response.json();
  return products;
};

export { get_products, get_product, get_comments };
