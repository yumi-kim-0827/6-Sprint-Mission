import React, { useEffect, useState } from "react";
import { getArticle } from "../../api/api";
import { Articles, OrderBy, Post } from "../../../types/articleTypes";
import PostFeed from "./PostFeed";
import DropDownMenu from "../components/DropdownMenu";
const AllPost = () => {
  const [article, setArticle] = useState<Articles | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [orderBy, setOrderBy] = useState<OrderBy>("recent");
  const articleList: Post[] = article ? article.list : [];
  useEffect(() => {
    async function fetchArticle() {
      try {
        const response: Articles = await getArticle(orderBy, 10);
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
  }, [orderBy]);

  const handleSortSelection = (orderBy: OrderBy) => {
    setOrderBy(orderBy);
  };
  return (
    <>
      <h1>게시글</h1>
      <DropDownMenu onSortSelection={handleSortSelection} />
      {articleList.map((article) => (
        <PostFeed key={article.id} article={article} />
      ))}
    </>
  );
};

export default AllPost;
