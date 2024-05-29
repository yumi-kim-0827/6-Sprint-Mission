import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Board.module.css";
import Articles from "@/components/Articles";
import BestArticles from "@/components/BestArticles";
import Image from "next/image";
import Link from "next/link";
import { getArticles, getBestArticles, list } from "./apis/api";

interface BoardNavBarProps {
  formatCategory: (value: string | null) => void;
  setResultToSearchValue: (value: string) => void;
}

const BoardNavBar = ({ formatCategory, setResultToSearchValue }: BoardNavBarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState<string | null>("최신순");

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setResultToSearchValue(value);
  };

  const handleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const setDropDownMenuByClick = (e: MouseEvent) => {
    const { textContent } = e.target as HTMLElement;
    setDropdownMenu(textContent);
    setIsDropdownOpen(false);
    setCategory(textContent);
  };

  const setCategory = (value: string | null) => {
    formatCategory(value);
  };

  return (
    <div className={styles["board-nav-bar"]}>
      <div className={styles["board-nav-bar__top"]}>
        <h2 className={styles["board-nav-bar__title"]}>게시글</h2>
        <Link className={styles["board-nav-bar__write-btn"]} href="/additems">
          글쓰기
        </Link>
      </div>

      <div className={styles["board-nav-bar__bottom"]}>
        <label htmlFor="search"></label>
        <Image
          id="search-icon"
          className={styles["board-nav-bar__search-icon"]}
          src="/images/Articles/search-icon.png"
          alt="검색 아이콘"
          width={16}
          height={16}
        />
        <input
          onChange={handleSearchInput}
          className={styles["board-nav-bar__search-bar"]}
          id="search"
          type="text"
          placeholder="검색할 상품을 입력해주세요"
        />

        <div className={styles["board-nav-bar__dropdown"]} onClick={handleDropdownOpen}>
          <span className={styles["dropdown-value"]}>{dropdownMenu}</span>
          <Image
            src="/images/Articles/dropdown-mobile.png"
            className={styles["dropdown-mobile-icon"]}
            alt="제품 페이지 드롭다운 메뉴 모바일 아이콘"
            width={24}
            height={24}
          />
          <Image
            src="/images/Articles/dropdown-arrow.png"
            className={styles["dropdown-icon"]}
            alt="제품 페이지 드롭다운 메뉴 아이콘"
            width={24}
            height={24}
          />
        </div>
        {isDropdownOpen && (
          <div className={styles["dropdown-menu"]} onClick={setDropDownMenuByClick}>
            <span>최신순</span>
            <span>좋아요순</span>
          </div>
        )}
      </div>
    </div>
  );
};

interface option {
  orderBy?: string | undefined;
  keyword?: string | undefined;
}

const Board = () => {
  const router = useRouter();
  const [articles, setArticles] = useState<list[]>([]);
  const [orderBy, setOrderBy] = useState<string>("recent");
  const [keyword, setKeyword] = useState<string>("");
  const [bestArticles, setBestArticles] = useState([]);

  const setResultToSearchValue = (value: string) => {
    setKeyword(value);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, keyword: value },
    });
  };

  const formatCategory = (value: string | null) => {
    const newValue = value === "최신순" ? "recent" : "like";
    setOrderBy(newValue);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, orderBy: newValue },
    });
  };

  const getArticlesList = async (option: option) => {
    const { list } = await getArticles(option);
    setArticles(list);
  };

  useEffect(() => {
    getArticlesList({ orderBy, keyword });
  }, [orderBy, keyword]);

  useEffect(() => {
    if (router.query.orderBy) {
      setOrderBy(router.query.orderBy as string);
    }
    if (router.query.keyword) {
      setKeyword(router.query.keyword as string);
    }
  }, [router.query]);

  return (
    <div className={styles.container}>
      <section className={styles["best-article-list"]}>
        <BestArticles />
      </section>
      <BoardNavBar formatCategory={formatCategory} setResultToSearchValue={setResultToSearchValue} />
      <section className={styles["all-article-list"]}>
        {articles.map((article: list) => {
          return <Articles key={article.title} {...article} />;
        })}
      </section>
    </div>
  );
};

export default Board;
