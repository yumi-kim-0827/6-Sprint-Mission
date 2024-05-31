import React, { ChangeEvent, KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Board.module.css";
import Articles from "@/components/Articles";
import BestArticles from "@/components/BestArticles";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { getArticles, getBestArticles, listType } from "../lib/apis/api";
import useMediaQuery from "@/hooks/useMatchMedia";

const BoardNavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState<string | null>("최신순");
  const router = useRouter();
  const [keyword, setKeyword] = useState(router.query.keyword || "");
  const [orderBy, setOrderBy] = useState(router.query.orderBy || "recent");

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === "") {
      setKeyword(value);
    }
  };

  const handleSearchInputKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const { value } = e.target as HTMLInputElement;
      setKeyword(value);
    }
  };

  const handleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const setDropDownMenuByClick = (e: MouseEvent) => {
    const { textContent } = e.target as HTMLElement;
    setDropdownMenu(textContent);
    setIsDropdownOpen(false);
    if (textContent) {
      if (textContent === "최신순") {
        setOrderBy("recent");
      } else {
        setOrderBy("like");
      }
    }
  };

  useEffect(() => {
    router.push({
      pathname: "/boards",
      query: {
        orderBy,
        keyword,
      },
    });
  }, [keyword, orderBy]);

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
          onKeyDown={handleSearchInputKeyDown}
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
            className={styles[isDropdownOpen ? "dropdown-open-icon" : "dropdown-icon"]}
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

export interface QueryOption {
  orderBy?: string | string[];
  keyword?: string | string[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const orderBy = context.query["orderBy"];
  const keyword = context.query["keyword"];

  const res = await getArticles({ orderBy, keyword });
  const articles = res.list ?? [];

  return {
    props: {
      articles,
    },
  };
}

type Articles = {
  articles: listType[];
};

const Board = ({ articles }: Articles) => {
  const [bestArticles, setBestArticles] = useState<listType[]>([]);
  const [pageSize, setPageSize] = useState<number>(3);

  const isSmallScreen = useMediaQuery("(min-width: 380px) and (max-width: 767px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px) and (max-width: 1199px)");
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");

  const getBestArticleList = async (option: number) => {
    const { list } = await getBestArticles(option);
    setBestArticles(list);
  };

  useEffect(() => {
    if (isLargeScreen) {
      setPageSize(3);
    } else if (isMediumScreen) {
      setPageSize(2);
    } else if (isSmallScreen) {
      setPageSize(1);
    }
  }, [isLargeScreen, isMediumScreen, isSmallScreen]);

  useEffect(() => {
    if (isLargeScreen || isMediumScreen || isSmallScreen) {
      getBestArticleList(pageSize);
    }
  }, [pageSize, isLargeScreen, isMediumScreen, isSmallScreen]);

  return (
    <>
      <Head>
        <title>자유게시판</title>
      </Head>
      <div className={styles.container}>
        <h2 className={styles["article-top-text"]}>베스트 게시글</h2>
        <section className={styles["best-article-list"]}>
          {bestArticles.map((article) => {
            return <BestArticles key={article.title} {...article} />;
          })}
        </section>
        <BoardNavBar />
        <section className={styles["all-article-list"]}>
          {articles.map((article: listType) => {
            return <Articles key={article.title} {...article} />;
          })}
        </section>
      </div>
    </>
  );
};

export default Board;
