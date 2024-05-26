import { instance } from "./Axios";

type Writer = {
  image: string;
  nickname: string;
  id: number;
};

export type Comment = {
  writer: Writer;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
};

type CommentsResponse = {
  nextCursor: number;
  list: Comment[];
};

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
