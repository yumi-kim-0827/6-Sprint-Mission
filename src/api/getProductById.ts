import { baseAxios } from "./api";

export async function getProductById(productId: string) {
  const item_response = await baseAxios.get(`/products/${productId}`);
  const comment_response = await baseAxios.get(
    `/products/${productId}/comments/?limit=10`
  );

  if (item_response.status !== 200) {
    throw new Error("제품 정보를 불러오는데 실패했습니다.");
  } else if (comment_response.status !== 200) {
    throw new Error("댓글 정보를 불러오는데 실패했습니다.");
  }

  const itemDetail = await item_response.data;
  const itemComments = await comment_response.data;

  return [itemDetail, itemComments];
}
