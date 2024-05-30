import instance from "@/lib/axios";
import { AxiosResponse } from "axios";

export type listType = {
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
  list: listType[];
  totalCount: number;
};

export async function getArticles({
  orderBy = "recent",
  keyword = "",
}: {
  orderBy?: string | string[];
  keyword?: string | string[];
}) {
  const formattedOrderBy = Array.isArray(orderBy) ? orderBy[0] : orderBy;
  const formattedKeyword = Array.isArray(keyword) ? keyword[0] : keyword;

  const params = new URLSearchParams({
    orderBy: formattedOrderBy,
    keyword: formattedKeyword,
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
