import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
}) => {
  try {
    const response = await axios.get(`${baseUrl}/products`, {
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
