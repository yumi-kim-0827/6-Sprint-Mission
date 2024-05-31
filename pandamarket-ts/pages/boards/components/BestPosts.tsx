import React, { useEffect, useState } from "react";
import { Articles } from "../../../types/articleTypes";
import { getArticle } from "../../api/api";
import PostCard from "./PostCard";
import useBreakPoint from "../../../hooks/useBreakPoint";
const BestPosts = () => {
  const [article, setArticle] = useState<Articles | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { isMobile, isTablet, isDesktop } = useBreakPoint();

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response: Articles = await getArticle("like", {
          isMobile,
          isTablet,
          isDesktop,
        });
        if (!response) {
          throw new Error("게시물을 찾을 수 없습니다");
        }
        setArticle(response);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("알 수 없는 오류 발생");
        }
      }
    }
    fetchArticle();
  }, [isMobile, isTablet, isDesktop]);

  useEffect(() => {});

  if (error) {
    alert(`오류: ${error}`);
  }
  console.log(article);
  const articleList = article ? article.list : [];
  return (
    <>
      {articleList.map((article) => (
        <PostCard key={article.id} article={article} />
      ))}
    </>
  );
};

export default BestPosts;
