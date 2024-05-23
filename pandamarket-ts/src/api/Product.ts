type images = string[];

type tags = string[];

export interface Product {
  id: number;
  createAt: string;
  updateAt: string;
  description: string;
  images: images;
  name: string;
  ownerId: number;
  price: number;
  tags: tags;
  isFavorite: boolean;
  favoriteCount: number;
}

export interface Item {
  content: string;
  createAt: string;
  updatedAt: string;
  id: number;
  writer: {
    id: number;
    image: string;
    nickname: string;
  };
}
