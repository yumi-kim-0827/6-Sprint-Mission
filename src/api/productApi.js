import axios from 'axios';

export const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
}) => {
  try {
    const response = await axios.get(
      'https://panda-market-api.vercel.app/products',
      {
        params: {
          page,
          pageSize,
          orderBy,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error('상품 불러오기 실패');
  }
};
