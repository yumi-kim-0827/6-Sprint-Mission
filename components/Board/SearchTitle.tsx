"use client";
import styles from "./SearchTitle.module.css";
import Image from "next/image";
import { List } from "@/app/apis/getArticle";
import { formatDate } from "@/app/utils/formateDate";
import heartIcon from "@/app/assets/images/ic_heart.svg";
import profileIcon from "@/app/assets/images/ic_profile.png";
import searchIcon from "@/app/assets/images/ic_search.png";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Props {
  articles: List[];
  keyword: string;
  page: number;
  pageSize: number;
  orderBy: string;
}

export default function SearchTitle({
  articles,
  keyword,
  page,
  pageSize,
  orderBy,
}: Props) {
  const router = useRouter();
  const [sortBy, setSortBy] = useState(orderBy);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setSortBy(orderBy);
  }, [orderBy]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    router.push(
      `/boards?page=${page}&pageSize=${pageSize}&keyword=${newKeyword}&orderBy=${sortBy}`
    );
  };

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
    setIsDropdownOpen(false);
    router.push(
      `/boards?page=${page}&pageSize=${pageSize}&keyword=${keyword}&orderBy=${newSortBy}`
    );
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchForm}>
        <input
          type="text"
          placeholder="검색할상품을 입력하세요"
          defaultValue={keyword}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        <div className={styles.sortDropdown}>
          <div
            className={styles.sortDropdownToggle}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {sortBy === "recent" ? "최신순" : "좋아요순"}
            <span className={styles.sortDropdownIcon}>▼</span>
          </div>
          {isDropdownOpen && (
            <ul className={styles.sortDropdownMenu}>
              <li onClick={() => handleSortChange("recent")}>최신순</li>
              <li onClick={() => handleSortChange("like")}>좋아요순</li>
            </ul>
          )}
        </div>
      </div>
      <ul className={styles.articleList}>
        {articles.map((article) => (
          <li key={article.id} className={styles.articleItem}>
            <div className={styles.articleContent}>
              <div className={styles.articleItemsWrapper}>
                <div className={styles.articleTitle}>{article.title}</div>
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
              </div>
              <div className={styles.articleInfo}>
                <div className={styles.articleWriterWrapper}>
                  <Image
                    src={profileIcon}
                    width={16}
                    height={16}
                    alt="프로필"
                  />
                  <span className={styles.articleWriter}>
                    {article.writer.nickname}
                  </span>
                  <span className={styles.articleDate}>
                    {formatDate(article.createdAt)}
                  </span>
                </div>
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
          </li>
        ))}
      </ul>
    </div>
  );
}
