import { useState } from "react";
import { AxiosRequestConfig } from "axios";
import dispatcher from "@/libs/dispatcher";

export default function useAxiosFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);

  type AxiosFetch = <T>(options: AxiosRequestConfig<T>) => Promise<T>;

  const axiosFetch: AxiosFetch = async (options: AxiosRequestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await dispatcher({ ...options });
      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err);
      return err;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, axiosFetch };
}
