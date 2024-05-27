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

const fetchData = async <T>(
  url: string,
  params?: Record<string, unknown>
): Promise<T | undefined> => {
  try {
    const response = await instance.get<T>(url, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getComments = (
  productId: number,
  limit: number
): Promise<CommentsResponse | undefined> => {
  return fetchData<CommentsResponse>(`/products/${productId}/comments`, {
    limit,
  });
};
