import React from "react";
import { ArticleData } from "@/types/types";
import styles from "@/components/BestArticle/BestArticle.module.css";

interface ArticleProps {
  article: ArticleData;
}

const BestArticle = ({ article }: ArticleProps) => {
  return (
    <div className={styles.article}>
      <div>
        <h2>🏅BEST</h2>
      </div>
      <div className={styles["article-content"]}>
        <h2 className={styles["article-title"]}>{article.title}</h2>
        {/* 이미지는 나중에.... */}
      </div>
      <div className={styles["article-info"]}>
        <div className={styles["article-info-container1"]}>
          <img src="/ic_profile.svg" alt="Like icon" />
          <div>{article.writer.nickname}</div>
          <div className={styles["article-info-container2"]}>
            <img src="/ic_like.svg" alt="Like icon" />
            <div>{article.likeCount}</div>
          </div>
        </div>
        <div>{new Date(article.createdAt).toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default BestArticle;
