import BestPostBoard from "@/components/BestPostBoard";
import PostList from "@/components/PostList";
import { useState, useEffect } from "react";
import axios from "@/pages/api/axios";
import styles from "@/styles/boards.module.scss";
import Search from "@/components/Search";

export default function Boards() {
  const [posts, setPosts] = useState([]);
  const [order, setOrder] = useState("likeCount");

  const changeOrder = () => {};

  async function getPosts() {
    const res = await axios.get("/articles");
    const nextData = res.data.list ?? [];
    const sortedData = [...nextData].sort(function (a, b) {
      return a.likeCount > b.likeCount ? -1 : a.likeCount < b.likeCount ? 1 : 0;
    });
    setPosts(sortedData);
  }

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <h1 className={styles.title}>베스트 게시글</h1>
      <BestPostBoard />
      <div className={styles.postListContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>게시글</h1>
          <button className={styles.writeButton}>글쓰기</button>
        </div>
        <Search />
        <PostList posts={posts} />
      </div>
    </div>
  );
}
