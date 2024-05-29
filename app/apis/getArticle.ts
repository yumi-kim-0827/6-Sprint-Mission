import { AxiosError } from "axios";
import { instance } from "./Axios";

export interface RootObject {
  totalCount: number;
  list: List[];
}

export interface List {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: Writer;
  image: string;
  content: string;
  title: string;
  id: number;
}

interface Writer {
  nickname: string;
  id: number;
}

export const getArticle = async (
  page: number = 1,
  pageSize: number = 10,
  orderBy: "recent" | "like" = "recent",
  keyword: string = ""
): Promise<RootObject> => {
  try {
    const response = await instance.get<RootObject>("/articles", {
      params: {
        page,
        pageSize,
        orderBy,
        keyword,
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("요청 실패 (Axios error):", error.message);
    } else {
      console.error("요청 실패 (Unknown error):", error);
    }
    throw new Error("게시글을 불러오는데 실패했습니다.");
  }
};
