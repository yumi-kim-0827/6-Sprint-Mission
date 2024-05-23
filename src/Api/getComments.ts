import { instance } from "./Axios";

interface Writer {
  image: string;
  nickname: string;
  id: number;
}

export interface Comment {
  writer: Writer;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

interface CommentsResponse {
  nextCursor: number;
  list: Comment[];
}

export const getComments = async (
  productId: number,
  limit: number
): Promise<CommentsResponse | undefined> => {
  try {
    const response = await instance.get<CommentsResponse>(
      `/products/${productId}/comments`,
      {
        params: {
          limit,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
