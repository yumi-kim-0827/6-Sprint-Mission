export type WriterType = {
  id: number;
  nickname: string;
  image: string;
};

export type CommentType = {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  writer: WriterType;
};

export type ProductCommentType = {
  list: CommentType[];
  nextCursor: number | null;
};
