import { baseAxios } from './api';
import { OrderBy } from 'types/order';

interface getProductDetailProps {
  page?: number;
  pageSize?: number;
  orderBy?: OrderBy.좋아요순 | OrderBy.최신순;
}

export const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = OrderBy.최신순,
}: getProductDetailProps) => {
  try {
    const response = await baseAxios.get('products', {
      params: {
        page,
        pageSize,
        orderBy,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('상품 불러오기 실패');
  }
};
