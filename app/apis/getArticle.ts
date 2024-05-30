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

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
