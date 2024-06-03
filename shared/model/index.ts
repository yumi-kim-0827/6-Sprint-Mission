export type Article = {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
};

export interface ArticleData {
  list: Array<Article>;
  totalCount: number;
}

export interface GetArticleProps {
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
}
