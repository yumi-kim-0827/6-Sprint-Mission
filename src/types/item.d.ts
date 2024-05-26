interface Item {
  createdAt: Date;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
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
