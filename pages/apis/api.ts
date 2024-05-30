import instance from "@/lib/axios";
import { AxiosResponse } from "axios";

export type list = {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: WriterType;
};

export type WriterType = {
  id: number;
  nickname: string;
};

export type ArticlesType = {
  list: list[];
  totalCount: number;
};

export async function getArticles({ orderBy = "recent", keyword = "" }) {
  const params = new URLSearchParams({
    orderBy: orderBy,
    keyword: keyword,
  });
  try {
    const response: AxiosResponse<ArticlesType> = await instance.get(`?${params.toString()}`);
    return response.data;
  } catch (e) {
    console.error(`error : ${e}`);
    throw new Error();
  }
}

export async function getBestArticles(pageSize: number) {
  const params = new URLSearchParams({
    page: "1",
    pageSize: pageSize.toString(),
    orderBy: "like",
  });
  try {
    const response: AxiosResponse<ArticlesType> = await instance.get(`?${params.toString()}`);
    return response.data;
  } catch (e) {
    console.error(`error : ${e}`);
    throw new Error();
  }
}
