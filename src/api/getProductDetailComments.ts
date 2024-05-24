import axios from "axios";
import { API_URL } from "../constants/apiConfig";
import { Product } from "../types";

interface ProductDetailCommentsProps {
  id: string;
  limit?: number;
}

interface Writer {
  id: number;
  nickname: string;
  image: string;
}

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface CommentsResponse {
  list: Comment[];
  nextCursor: string | null;
}

const getProductDetailComments = async ({
  id,
  limit = 10,
}: ProductDetailCommentsProps): Promise<CommentsResponse> => {
  try {
    const response = await axios.get<CommentsResponse>(
      `${API_URL}/${id}/comments?limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed product detail comments data call", error);
    throw error;
  }
};

export default getProductDetailComments;
