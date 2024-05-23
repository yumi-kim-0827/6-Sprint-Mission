import { instance } from './Axios';

export const getItems = async () => {
  try {
    const response = await instance.get('/products');
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch items: ${error}`);
    throw new Error('정보를 불러오는데 실패했습니다');
  }
};
