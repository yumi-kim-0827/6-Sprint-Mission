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
  try {
    const response = await baseAxios.get(`products/${productId}/comments`, {
      params: {
        limit,
        cursor,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('문의 가져오기 실패');
  }
};
