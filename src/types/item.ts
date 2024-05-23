export type ItemType = {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: [string];
  ownerId: number;
  favoriteCount: number;
  createdAt: Date;
  updatedAt: Date;
  isFavorite: boolean;
};
