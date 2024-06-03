export interface Article {
  id: number;
  title: string;
  content: string;
  image?: string;
  likeCount: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export interface ArticleList {
  list: Article[];
  totalCount: number;
}
