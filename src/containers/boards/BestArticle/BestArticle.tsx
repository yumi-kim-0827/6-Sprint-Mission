import Image from "next/image";
import styles from "./BestArticle.module.scss";
import { Article } from "@/src/interfaces/Article.interface";

export default function BestArticle({ article }: { article: Article }) {
  const imageUrl = article.image || "";

  return (
    <div className={styles.container}>
      <div className={styles.contentSection}>
        <div className={styles.title}>{article.title}</div>
        <div className={styles.image}>
          {imageUrl && (
            <Image src={imageUrl} alt="게시글 이미지" width={50} height={50} />
          )}
        </div>
      </div>
      <div className={styles.writerSection}>
        <div className={styles.nickname}>{article.writer.nickname}</div>
        <div className={styles.date}>{article.createdAt.split("T")[0]}</div>
        <div className={styles.likeCount}>{article.likeCount}</div>
      </div>
    </div>
  );
}
