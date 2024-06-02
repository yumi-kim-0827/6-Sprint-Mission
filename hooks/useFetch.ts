import { useEffect, useState, useRef } from 'react';

interface UseFetchReturn<T> {
  data: T | null;
  isLoading: boolean;
  loadError: Error | null;
}

export const useFetch = <T>(
  fetchFunction: (args: any) => Promise<T>,
  args: any
): UseFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setLoadError(null);
      try {
        const result = await fetchFunction(args);
        setData(result);
      } catch (error) {
        setLoadError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [args, fetchFunction]);

  return { data, isLoading, loadError };
};
