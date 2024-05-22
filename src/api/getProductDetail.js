import { baseAxios } from './api';

export const getProductDetail = async ({ productId }) => {
  try {
    const response = await baseAxios.get(`products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error('아이템 가져오기 실패');
  }
};
