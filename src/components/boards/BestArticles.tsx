import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useAxiosFetch from "@/hooks/useAxiosFetch";
import useDeviceState, { Device } from "@/hooks/useDeviceState";
import { Article, DataFormat } from "@/@types/api_response";
import ArticleCard from "./ArticleCard";

export default function BestArticles() {
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [skeletonCount, setSkeletonCount] = useState(1);
  const { isLoading, error, axiosFetch } = useAxiosFetch();
  const deviceState = useDeviceState();

  const getArticles = async (pageSize: number) => {
    const res = await axiosFetch<DataFormat<Article>>({
      url: "/articles",
      params: {
        pageSize,
        orderBy: "like",
      },
    });

    setArticleList(res?.data?.list);
  };

  useEffect(() => {
    if (!deviceState) return;

    let pageSize;
    if (deviceState === Device.MOBILE) pageSize = 1;
    if (deviceState === Device.TABLET) pageSize = 2;
    if (deviceState === Device.PC) pageSize = 3;

    setSkeletonCount(pageSize as number);
    getArticles(pageSize as number);
  }, [deviceState]);

  return (
    <div className="mt-6">
      <h1 className="text-xl font-bold text-cool-gray-900">베스트 게시글</h1>

      {!isLoading ? (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6">
          {articleList.map((article) => (
            <ArticleCard key={article.id} data={article} />
          ))}
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-1 *:animate-pulse md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6">
          {Array.from({ length: skeletonCount }).map(() => (
            <ArticleCard.Skeleton key={uuidv4()} />
          ))}
        </div>
      )}
    </div>
  );
}
