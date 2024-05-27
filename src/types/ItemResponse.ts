export type Item = {
  updatedAt: string;
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
};

export type ItemProps = {
  totalCount?: number;
  list?: Item[];
};

export type ItemForSaleType = Pick<Item, 'favoriteCount' | 'price' | 'name' | 'id' | 'images'>;
export type BestItemType = Omit<ItemForSaleType, 'images'> & { image: string };
