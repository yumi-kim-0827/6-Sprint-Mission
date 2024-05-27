import inctance from "./axioxInstance";
import { AxiosResponse } from "axios";
import { ShowDetailValues } from "../components/show-detail";

interface ApiTypeValues {
  orderBy: string;
  page: number;
  pageSize: number | undefined;
  keyword: string;
}

export type listResponse = {
  items: {
    createdAt: string;
    favoriteCount: number;
    ownerId: number;
    images: string;
    tags: string[];
    price: number;
    description: string;
    name: string;
    id: number;
  }[];
};

type WriterValue = {
  id: number;
  nickname: string;
  image: string;
};

type ComementValue = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: WriterValue;
};

export type GetItemResponse = {
  totalCount: number;
  list: listResponse[];
  comment: ComementValue;
} & ShowDetailValues;

export async function getProduct({
  orderBy = "recent",
  page,
  pageSize,
  keyword = "",
}: ApiTypeValues): Promise<GetItemResponse> {
  try {
    const response: AxiosResponse<GetItemResponse> = await inctance.get(
      `?&page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    );
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
    throw new Error(`Failed to fetch product data: ${error}`);
  }
}

export async function getBestProduct(pageSize: number | undefined): Promise<GetItemResponse> {
  try {
    const response: AxiosResponse<GetItemResponse> = await inctance.get(
      `?orderBy=favorite&page=1&pageSize=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
    throw new Error(`Failed to fetch product data: ${error}`);
  }
}

export async function getTotalCount(): Promise<GetItemResponse> {
  try {
    const response: AxiosResponse<GetItemResponse> = await inctance.get(``);
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
    throw new Error(`Failed to fetch product data: ${error}`);
  }
}

export async function getDetailProduct(id: string | undefined): Promise<GetItemResponse> {
  try {
    const response: AxiosResponse<GetItemResponse> = await inctance.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
    throw new Error(`Failed to fetch product data: ${error}`);
  }
}

export async function getProductComment(id: string | undefined): Promise<listResponse[]> {
  try {
    const response: AxiosResponse<GetItemResponse> = await inctance.get(`/${id}/comments?limit=10`);
    return response.data.list;
  } catch (error) {
    console.error(`${error} : error`);
    throw new Error(`Failed to fetch product data: ${error}`);
  }
}
