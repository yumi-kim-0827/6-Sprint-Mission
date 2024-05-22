interface Writer {
  id: number;
  nickname: string;
  image: string;
}

export default interface Comment {
  id: number;
  content: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  writer: Writer;
}
