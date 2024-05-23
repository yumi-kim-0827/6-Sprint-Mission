import { baseAxios } from './api';

interface getProductCommentProps {
  productId: number;
  limit?: number;
  cursor?: number;
}

export const getProductComment = async ({
  productId,
  limit = 10,
  cursor,
}: getProductCommentProps) => {
  const cursorQuery = cursor ? `&cursor=${cursor}` : '';
  try {
    const response = await baseAxios.get(
      `products/${productId}/comments?limit=${limit}${cursorQuery}`
    );
    return response.data;
  } catch (error) {
    throw new Error('문의 가져오기 실패');
  }
};
