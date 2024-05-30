"use client";

import styles from "./SearchTitle.module.css";
import Image from "next/image";
import { List } from "@/app/apis/getArticle";
import { formatDate } from "@/app/utils/formateDate";
import heartIcon from "@/app/assets/images/ic_heart.svg";
import profileIcon from "../assets/images/img_profile.png";
import { useRouter } from "next/navigation";

interface Props {
  articles: List[];
  keyword: string;
  page: number;
  pageSize: number;
}

export default function SearchTitle({
  articles,
  keyword,
  page,
  pageSize,
}: Props) {
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    router.push(
      `/boards?page=${page}&pageSize=${pageSize}&keyword=${newKeyword}`
    );
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchForm}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          defaultValue={keyword}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>
      <ul className={styles.articleList}>
        {articles.map((article) => (
          <li key={article.id} className={styles.articleItem}>
            <div className={styles.articleContent}>
              <div className={styles.articleTitle}>{article.title}</div>
              <div className={styles.articleInfo}>
                <span className={styles.articleWriter}>
                  {article.writer.nickname}
                </span>
                <span className={styles.articleDate}>
                  {formatDate(article.createdAt)}
                </span>
                <span className={styles.articleLike}>
                  <Image
                    src={heartIcon}
                    width={16}
                    height={16}
                    alt="하트아이콘"
                  />
                  {article.likeCount}
                </span>
              </div>
            </div>
            {article.image && (
              <div className={styles.articleImage}>
                <Image
                  src={article.image}
                  width={72}
                  height={72}
                  alt="article thumbnail"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
