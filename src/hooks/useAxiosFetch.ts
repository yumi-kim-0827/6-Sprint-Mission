import { useState } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { axiosRequester } from "@/libs/axios";

type AxiosFetch = <T>(
  options: AxiosRequestConfig<T>,
) => Promise<AxiosResponse<T>>;

export default function useAxiosFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);

  const axiosFetch: AxiosFetch = async (options) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosRequester({ ...options });
      return response;
    } catch (err: unknown) {
      setError(err);
      throw new Error("fetch 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, axiosFetch };
}
