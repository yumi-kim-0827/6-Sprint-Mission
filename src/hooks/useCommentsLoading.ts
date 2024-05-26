import { useState } from "react";
import { getComments } from "api/getComments";

interface Comment {
  writer: {
    image: string;
    nickname: string;
    id: 1;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}
interface Comments {
  nextCursor: number;
  list: Comment[];
}

type HandleLoad = ({
  productId,
}: {
  productId: number;
}) => Promise<Comments | null>;

export function useCommentsLoading(): [boolean, Error | null, HandleLoad] {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState<Error | null>(null);

  const handleLoad = async ({ productId }: { productId: number }) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getComments({ productId });
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
