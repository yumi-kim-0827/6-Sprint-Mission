export interface ArticleType {
  updatedAt: string;
  createdAt: string;
  likeCount: string;
  writer: WriterType;
  image?: string;
  content: string;
  title: string;
  id: number;
}

interface WriterType {
  nickname: string;
  id: number;
}
