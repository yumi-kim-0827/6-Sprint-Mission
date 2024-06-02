interface Writer {
  nickname: string;
  id: number;
}

export type QueryString = string | string[];

export interface DataFormat<T> {
  list: T[];
  totalCount: number;
}

export interface Article {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: Writer;
  image: string;
  content: string;
  title: string;
  id: number;
}
