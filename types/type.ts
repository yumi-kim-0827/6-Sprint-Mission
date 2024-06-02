export type ChildrenProps = {
  children: React.ReactNode;
}

interface Writer {
  id: number;
  nickname: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: string;
  updatedAt?: string;
  writer: Writer;
}

export type ArticlesProps = {
  articles: Article[];
}

export interface ArticlesResponse {
  data: {
    list: Article[];
    totalCount: number;
  }
}

export interface InitialDataProps {
  initialData: Article[];
  initialTotalCount: number;
}

export interface SearchProps {
  keyword: string;
  articles: Article[];
}
