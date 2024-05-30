import { useState } from 'react';

export const useFetch = (fetchFun: Function) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<Error | null>(null);

  const handleFetch = async (...args: any[]) => {
    try {
      setIsLoading(true);
      setLoadError(null);
      let result = await fetchFun(...args);
      return result;
    } catch (error) {
      setLoadError(error as Error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, loadError, handleFetch };
};
