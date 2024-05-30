import Link from "next/link";
import styles from "./Articles.module.css";
import Image from "next/image";

export interface ArticleListProps {
  id: number;
  title: string;
  price: number;
  likeCount: number;
  image: string;
  content: string;
  writer: {
    id: number;
    nickname: string;
  };
  createdAt: string;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function ArticleList({
  id,
  title,
  image,
  likeCount,
  writer,
  createdAt,
}: ArticleListProps) {
  const formattedDate = formatDate(createdAt);
  return (
    <Link className={styles.Link} href={`/items/${id}`}>
      <section className={styles.ArticlesList}>
        <div>
          <p>{title}</p>
          <div className={styles.authorInfo}>
            <p> {writer.nickname}</p>
            <Image
              src="/images/profile.svg"
              alt="프로필 사진"
              width={24}
              height={24}
            />
            <p> {formattedDate} </p>
          </div>
        </div>
        <div className={styles.postInfo}>
          <img width={120} src={image} />
          <div className={styles.favoriteCountContainer}>
            <Image
              src="/images/favoriteIcon.svg"
              width={20}
              height={17}
              alt="favorite icon"
            />
            <p>{likeCount}</p>
          </div>
        </div>
      </section>
    </Link>
  );
}

interface ArticlesProps {
  articles: ArticleListProps[];
}

function Articles({ articles }: ArticlesProps) {
  console.log(articles);
  return (
    <ul>
      {articles.map((article) => (
        <li className={styles.Articles} key={article.id}>
          <ArticleList {...article} />
        </li>
      ))}
    </ul>
  );
}

export default Articles;
