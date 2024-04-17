import { useState } from "react";
import { get_products } from "../api/api";

export default function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const handleLoad = async (...arg) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await get_products(...arg);
      return result;
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, loadingError, handleLoad];
}
