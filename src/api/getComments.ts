const panda_market_backend_api = process.env.REACT_APP_API_KEY;

interface Comment {
  writer: {
    image: string;
    nickname: string;
    id: 1;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}
interface Comments {
  nextCursor: number;
  list: Comment[];
}

const getComments = async ({
  productId,
}: {
  productId: number;
}): Promise<Comments> => {
  const response = await fetch(
    panda_market_backend_api + `products/${productId}/comments?limit=3`
  );

  if (response.status >= 400 && response.status < 600) {
    throw new Error("서버 에러가 발생했습니다");
  }
  const products = await response.json();
  return products;
};

export { getComments };
