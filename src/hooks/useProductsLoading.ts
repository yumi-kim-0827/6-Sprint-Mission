import { useState } from "react";
import { getProducts } from "api/getProducts";

interface Product {
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

export interface ProductsApi {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
}

interface LoadResult {
  totalCount: number;
  list: Product[];
}
type HandleLoad = (params: ProductsApi) => Promise<LoadResult | null>;

export function useProductsLoading(): [
  boolean,
  Error | null,
  boolean,
  HandleLoad
] {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingError, setLoadingError] = useState<Error | null>(null);
  const [noResult, setNoResult] = useState<boolean>(false);

  const handleLoad: HandleLoad = async (params) => {
    let result: LoadResult | null = null;
    try {
      setLoadingError(null);
      setIsLoading(true);
      setNoResult(false);
      result = await getProducts(params);
      if (result.totalCount === 0) {
        setNoResult(true);
      }
    } catch (error) {
      setLoadingError(error as Error);
    } finally {
      setIsLoading(false);
    }
    return result;
  };

  return [isLoading, loadingError, noResult, handleLoad];
}
