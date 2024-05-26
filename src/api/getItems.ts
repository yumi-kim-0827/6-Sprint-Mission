import { instance } from './Axios';

export type ItemsResponse = {
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
};

export type GetItemResponse = {
  totalCount: number;
  list: ItemsResponse[];
};

export const getItems = async (): Promise<GetItemResponse> => {
  try {
    const response = await instance.get<GetItemResponse>('/products');
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch items: ${error}`);
    throw new Error('정보를 불러오는데 실패했습니다');
  }
};
