import { instance } from './Axios';
type WriterResponse = {
  nickname: string;
  image: string;
  id: number;
};

export type GetCommentsResponse = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: WriterResponse;
};

type GetCommentListResponse = {
  nextCursor: number;
  list: GetCommentsResponse[];
};

export const getItemsComments = async (
  productId: string,
  limit: number
): Promise<GetCommentListResponse | undefined> => {
  try {
    const response = await instance.get<GetCommentListResponse>(`/products/${productId}/comments`, {
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
