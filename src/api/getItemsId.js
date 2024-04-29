import { instance } from './Axios';

export const getItemsId = async productId => {
  try {
    const response = await instance.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.log(`Failed to fetch items: ${error}`);
    throw new Error(`정보를 불러오는데 실패했습니다`);
  }
};
