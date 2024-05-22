import dispatcher from "api/dispatcher";
import { AxiosRequestConfig } from "axios";
import { useState } from "react";

export default function useAxiosFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const axiosFetch = async (options: AxiosRequestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await dispatcher({ ...options });

      return response;
    } catch (err: any) {
      setError(err);
      return err;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, axiosFetch };
}
