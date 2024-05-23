import { instance } from './Axios';

export type GetItem = {
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string;
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
  isFavorite: boolean;
};

export const getItemsId = async (productId: string): Promise<GetItem | undefined> => {
  try {
    const productIdNumber = parseInt(productId);
    const response = await instance.get<GetItem>(`/products/${productIdNumber}`);
    return response.data;
  } catch (error) {
    console.log(`Failed to fetch items: ${error}`);
    console.error(`정보를 불러오는데 실패했습니다`);
  }
};
