import { useState } from 'react';

const useLoading = (getApi: Function) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const handleLoad = async (...arg: any[]) => {
    try {
      setIsLoading(true);
      setError(null);
      let result = await getApi(...arg);
      return result;
    } catch (error) {
      setError(error as Error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, handleLoad };
};

export default useLoading;
