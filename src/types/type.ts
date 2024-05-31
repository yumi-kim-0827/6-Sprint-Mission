export type Article = {
  id: number;
  title: string;
  writer: {
    nickname: string;
  };
  image?: string;
  likeCount: number;
  createdAt: string;
};

export type SortBy = 'recent' | 'like';
