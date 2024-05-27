export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  favoriteCount: number;
  category: string;
  tags: string[];
}

export interface GetProductsParams {
  pageSize?: number;
  orderBy?: string;
}
