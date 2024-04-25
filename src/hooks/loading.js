import { useState } from "react";
import { get_comments, get_product, get_products } from "../api/api";

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [noResult,setNoResult] =useState(false);

  const handleLoad = async (...arg) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      setNoResult(false);
      result = await get_products(...arg);
      if(result.totalCount===0){setNoResult(true)}
      return result;
    } catch (error) {
      setLoadingError(error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, loadingError,noResult, handleLoad];
}

export function useProductLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const handleLoad = async (...arg) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await get_product(...arg);
      return result;
    } catch (error) {
      setLoadingError(error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, loadingError, handleLoad];
}
export function useCommentsLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const handleLoad = async (...arg) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await get_comments(...arg);
      return result;
    } catch (error) {
      setLoadingError(error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, loadingError, handleLoad];
}
