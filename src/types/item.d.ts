type ID = string | number;

interface Item {
  createdAt: Date;
  favoriteCount: number;
  ownerId: ID;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: ID;
  isFavorite: boolean;
}

interface ItemList {
  totalCount: number;
  list: Item[];
}

interface ItemForPost {
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
}

type ItemSortOptionsType = "createdAt" | "favoriteCount";
