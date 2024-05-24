export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  favoriteCount: number;
  category: string;
  orderBy: string;
}

export interface GetProductsParams {
  pageSize?: number;
}
