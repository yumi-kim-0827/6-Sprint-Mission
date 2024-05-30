import styles from "./BestArticle.module.scss";
import { Article } from "@/src/interfaces/Article.interface";

export default function BestArticle({ article }: { article: Article }) {
  return (
    <div className={styles.container}>
      <div className={styles.contentSection}>
        <div className={styles.title}>{article.title}</div>
      </div>
      <div className={styles.writerSection}>
        <div className={styles.nickname}>{article.writer.nickname}</div>
        <div className={styles.date}>{article.createdAt.split("T")[0]}</div>
        <div className={styles.likeCount}>{article.likeCount}</div>
      </div>
    </div>
  );
}
