import { useState, useEffect } from "react";
import { dispatcher } from "lib/axios";

export default function useRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestFunc = async (options) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await dispatcher({ ...options });
      return res;
    } catch (err) {
      setError(err);
      return err;
    } finally {
      setIsLoading(false);
    }
  };
  
  return { isLoading, error, requestFunc };
}