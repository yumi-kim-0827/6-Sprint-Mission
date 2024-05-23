import { instance } from './Axios';
type Writer = {
  nickname: string;
  image: string;
  id: number;
};

export type GetComments = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
};

type GetCommentList = {
  nextCursor: number;
  list: GetComments[];
};

export const getItemsComments = async (productId: string, limit: number): Promise<GetCommentList | undefined> => {
  const parseIntId = parseInt(productId);

  try {
    const response = await instance.get<GetCommentList>(`/products/${parseIntId}/comments`, {
      params: {
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    return undefined;
  }
};
