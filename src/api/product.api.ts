import instance from "./Axios";

interface ProductProps {
  productId: undefined;
}

interface CommentProps extends ProductProps {
  limit: number;
}

export async function getProducts({
  orderBy = "recent",
  page = 1,
  pageSize = 10,
}) {
  const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
  // console.log(query);
  try {
    const response = await instance.get(`/products?${query}`);

    const body = response.data;

    // console.log(body);

    return body;
  } catch (error) {
    console.error("API 오류 \n", error);
  }
}

export async function getProductId({ productId }: ProductProps) {
  const response = await instance.get(`/products/${productId}`);
  const body = response.data;

  // console.log(body);

  return body;
}

export async function getComment({ productId, limit = 3 }: CommentProps) {
  const response = await instance.get(
    `/products/${productId}/comments?limit=${limit}`
  );
  const body = response.data;

  // console.log(body);

  return body;
}
