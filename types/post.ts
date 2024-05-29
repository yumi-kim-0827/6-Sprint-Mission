export type Writer = {
  id: number;
  nickname: string;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  writer: Writer;
};

export type PostList = {
  list: Post[];
  totalCount: number;
};
