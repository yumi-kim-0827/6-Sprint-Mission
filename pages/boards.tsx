import BestPost from "@/components/bestPost";
import Posts from "@/components/posts";
import SearchInput from "@/components/search";
import styles from "@/styles/Board.module.css";
import LinkButton from "@/utils/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import Dropdown from "@/components/dropdown";

interface List {
  id: number;
  title: string;
  content: string;
  image: null | string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

interface Writer {
  id: number;
  nickname: string;
}

export default function Board() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<List[]>([]);
  const [order, setOrder] = useState<"recent" | "like">("recent");

  async function getPosts() {
    const res = await axios.get("/articles"); // 일단 기본값(recent) 기준으로 다불러옴
    const posts = res.data.list ?? [];
    setPosts(posts);
  }

  const handleSortOrderChange = (selectedOrder: "recent" | "like"): void => {
    setOrder(selectedOrder);
  };

  const sortData = (data: List[], order: "recent" | "like"): List[] => {
    if (order === "recent") {
      return data
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    } else if (order === "like") {
      return data.slice().sort((a, b) => b.likeCount - a.likeCount);
    } else {
      return data;
    }
  };

  useEffect(() => {
    try {
      getPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    // sortData(posts, order as "recent" | "like");
    const sortedPosts = sortData(posts, order);
    setPosts(sortedPosts);
  },[order])

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
          <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
          {/* 드롭다운 컴포넌트 */}
          <Dropdown onChange={handleSortOrderChange}/>
        </div>
        <div className={styles.postsContainer}>
          {/* 게시글 컴포넌트  */}
          <Posts posts={posts} />
        </div>
      </div>
    </div>
  );
}
