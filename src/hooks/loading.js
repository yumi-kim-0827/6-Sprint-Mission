import { useState } from "react";
import { get_products } from "../api/api";

export default function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [noResult,setNoResult] =useState(false);

  const handleLoad = async (...arg) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await get_products(...arg);
      console.log(result);
      if(result.totalCount===0){setNoResult(true)}
      return result;
    } catch (error) {
      console.log("error!")
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, loadingError,noResult, handleLoad];
}
