export default interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  favoriteCount: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  isFavorite?: boolean;
}
