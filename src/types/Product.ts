export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string;
  ownerId: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
}
