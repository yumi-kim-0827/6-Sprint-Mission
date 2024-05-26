import { useState } from "react";
import { getProduct } from "api/getProduct";

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
  isFavorite: boolean;
}
type HandleLoad = ({
  productId,
}: {
  productId: number;
}) => Promise<Product | null>;

export function useProductLoading(): [boolean, Error | null, HandleLoad] {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState<Error | null>(null);

  const handleLoad = async ({ productId }: { productId: number }) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getProduct({ productId });
      return result;
    } catch (error) {
      setLoadingError(error as Error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, loadingError, handleLoad];
}
