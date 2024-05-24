const panda_market_backend_api = process.env.REACT_APP_API_KEY;




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
  isFavorite: boolean;
}

const getProduct = async ({
  productId,
}: {
  productId: number;
}): Promise<Product> => {
  const response = await fetch(
    panda_market_backend_api + `products/${productId}`
  );

  if (response.status >= 400 && response.status < 600) {
    throw new Error("서버 에러가 발생했습니다");
  }
  const products = await response.json();
  return products;
};

export { getProduct };
