import Link from "next/link";
import styles from "./BestPostList.module.css";
import badge from "@/public/badge.svg";
import { BASE_URL } from "@/api/base";

export default function BestPostList({ className = "", articles }) {
  return (
    <>
      <div className={styles.bestPosts}>베스트 게시글</div>
      <div className={styles.bestpostContainer}>
        <img className={styles.badge} arc={badge} alt={badge} />
        <ul className={`${styles.articleList} ${className}`}>
          {articles.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.id}`}>
                <h2 className={styles.title}>{article.title}</h2>
                <img
                  className={styles.img}
                  src={article.image}
                  alt={article.title}
                />
              </Link>
              <div className={styles.info}>
                <h2 className={styles.writer}>{article.writer}</h2>
                <div className={styles.like}>{article.like}</div>
                <div className={styles.createdAt}>{article.createdAt}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
