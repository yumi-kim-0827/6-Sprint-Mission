import { useState, useEffect } from "react";
import useFetchData from "@/src/hooks/useFetchData";
import ArticleListResponse from "@/src/interfaces/Article.interface";
import BestArticle from "./BestArticle";

const getPageSize = () => {
  if (typeof window === "undefined") {
    // 서버사이드 렌더링 시 기본값 반환
    return 3;
  }

  const width = window.innerWidth;
  if (width < 768) return 1;
  else if (width < 1280) return 2;
  else return 3;
};

export default function BestArticleList() {
  const [pageSize, setPageSize] = useState<number>(getPageSize());

  const fetchArticles = useFetchData<ArticleListResponse>(
    `articles?page=1`,
    pageSize,
    "like"
  ) || { list: [], totalCount: 0 };
  const { list: ArticleList } = fetchArticles;

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div>베스트 게시글</div>
      <div className="list">
        {ArticleList?.map((article) => (
          <BestArticle article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
}
