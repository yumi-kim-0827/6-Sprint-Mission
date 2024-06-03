import Image from "next/image";
import styles from "./ArticleList.module.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export default function ArticleList({ articles = [] }) {
  console.log(articles.writer);
  return (
    <ul className={styles.articleContain}>
      {articles.map((article) => (
        <li key={article.id}>
          <div className={styles.container}>
            <p className={styles.titleText}>{article.title}</p>
            {article.image && (
              <div className={styles.imageSize}>
                <Image
                  fill
                  src={article.image}
                  alt="이미지"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
          </div>
          <div className={styles.container}>
            <div className={styles.writerInfoWrap}>
              <p className={styles.nickname}>{article.writer.nickname}</p>
              <p className={styles.writeTime}>
                {formatDate(article.createdAt)}
              </p>
            </div>
            <p className={styles.likeCount}>{article.likeCount}</p>
          </div>
          <hr className={styles.hrStyle}/>
        </li>
      ))}
    </ul>
  );
}
