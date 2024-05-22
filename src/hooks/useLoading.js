import { useState } from 'react';

const useLoading = (getApi) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = async (...arg) => {
    try {
      setIsLoading(true);
      setError(null);
      let result = await getApi(...arg);
      return result;
    } catch (error) {
      setError(error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, handleLoad };
};

export default useLoading;
