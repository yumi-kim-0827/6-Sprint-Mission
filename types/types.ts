export interface Writer {
  id: number;
  nickname: string;
}

export interface ArticleData {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface ArticlesResponse {
  list: ArticleData[];
  totalCount: number;
}
