const panda_market_backend_api = "https://panda-market-api.vercel.app/";

const get_products = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
}) => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(panda_market_backend_api + `products?${query}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const products = await response.json();
  return products;
};

export { get_products };
