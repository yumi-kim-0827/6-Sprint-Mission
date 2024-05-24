const panda_market_backend_api = process.env.REACT_APP_API_KEY;
console.log(panda_market_backend_api);
export interface ProductsApi {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
}

interface Product {
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

interface LoadResult {
  totalCount: number;
  list: Product[];
}

const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: ProductsApi): Promise<LoadResult> => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await fetch(panda_market_backend_api + `products?${query}`);

  if (response.status >= 400 && response.status < 600) {
    throw new Error("서버 에러가 발생했습니다");
  }
  const products = await response.json();
  return products;
};

export { getProducts };
