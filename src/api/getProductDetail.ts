import { baseAxios } from './api';

interface getProductDetailProps {
  productId: number;
}

export const getProductDetail = async ({
  productId,
}: getProductDetailProps) => {
  try {
    const response = await baseAxios.get(`products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error('아이템 가져오기 실패');
  }
};
