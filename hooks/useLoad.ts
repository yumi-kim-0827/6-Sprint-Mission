import { useState } from "react";
import { GetArticleType } from "@/apis/getArticles";

type PropGetData = GetArticleType;
// 나중에 다른 api 함수들도 유니온 |로 추가 할 예정인데, 좀 귀찮은 것 같아요. 더 좋은 방법 없나여?
type HandleLoadType = (
  ...arg: Parameters<PropGetData>
) => ReturnType<PropGetData>;

const useLoad = (getData: PropGetData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState<Error | null>(null);

  const handleLoad: HandleLoadType = async (...args) => {
    try {
      setLoadingError(null);
      setIsLoading(true);
      const result = await getData(...args);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        setLoadingError(error);
      } else {
        setLoadingError(new Error("에러가 발생해 버렸어요 ㅠㅠㅠ"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, loadingError, handleLoad] as const;
};

export default useLoad;
