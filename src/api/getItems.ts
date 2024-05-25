import { instance } from './Axios';

export interface Items {
  updatedAt: string;
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

export interface GetItem {
  totalCount: number;
  list: Items[];
}

export const getItems = async (): Promise<GetItem> => {
  try {
    const response = await instance.get<GetItem>('/products');
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch items: ${error}`);
    throw new Error('정보를 불러오는데 실패했습니다');
  }
};
