import BestPost from "@/components/bestPost";
import Posts from "@/components/posts";
import SearchInput from "@/components/search";
import styles from "@/styles/Board.module.css";
import LinkButton from "@/utils/Button";
import Link from "next/link";
import { useState } from "react";

export default function Board() {
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className={styles.BoardContainer}>
      <div className={styles.bestContainer}>
        <span className={styles.bestTopText}>베스트 게시글</span>
        {/* 베스트3개 컴포넌트 */}
        <div className={styles.bestPosts}>
          <BestPost />
        </div>
      </div>
      <div className={styles.posts}>
        <div className={styles.postsTop}>
          <span className={styles.bestTopText}>게시글</span>
          <LinkButton href="/">글쓰기</LinkButton>
        </div>
        <div className={styles.postsMiddle}>
          {/* 검색 컴포넌트 */}
          {/* <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm}/> */}
          {/* 드롭다운 컴포넌트 */}
        </div>
        <div className={styles.postsContainer}>
        {/* 게시글 컴포넌트  */}
        <Posts />
        </div>
      </div>
    </div>
  );
}
