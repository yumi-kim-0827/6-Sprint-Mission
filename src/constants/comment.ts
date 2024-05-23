export interface CommentWriter {
  image: string;
  nickname: string;
  id: number;
}

export default interface Comment {
  writer: CommentWriter;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}
