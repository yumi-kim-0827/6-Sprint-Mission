interface PostWriter {
  nickname: string;
  id: string;
}

interface Post {
  updatedAt: Date;
  createdAt: Date;
  likeCount: number;
  writer: PostWriter;
  image: string;
  content: string;
  title: string;
  id: string;
}
