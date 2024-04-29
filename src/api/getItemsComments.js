import { instance } from './Axios';

export const getItemsComments = async (productId, limit) => {
  try {
    const response = await instance.get(`/products/${productId}/comments`, {
      params: {
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
  }
};
