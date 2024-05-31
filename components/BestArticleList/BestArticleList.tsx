import React from "react";
import { ArticleData } from "@/types/types";
import BestArticle from "../BestArticle/BestArticle";
import styles from "@/components/BestArticleList/BestArticleList.module.css";

interface BestArticleListProps {
  articles: ArticleData[];
}

const BestArticleList = ({ articles }: BestArticleListProps) => {
  const sortedArticles = articles.sort((a, b) => b.likeCount - a.likeCount);

  return (
    <div className={styles["best-article-list"]}>
      <h2>베스트 게시글</h2>
      <div className={styles["best-article-container"]}>
        {sortedArticles.slice(0, 3).map((article) => (
          <BestArticle key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default BestArticleList;
