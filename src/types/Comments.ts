export interface Comments {
  writer: Writer;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

interface Writer {
  image: string;
  nickname: string;
  id: number;
}
