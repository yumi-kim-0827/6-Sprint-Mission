import BestPostBoard from "@/components/BestPostBoard";
import PostList from "@/components/PostList";
import { useState, useEffect } from "react";
import axios from "@/pages/api/axios";
import styles from "@/styles/boards.module.scss";

export default function Boards() {
  const [posts, setPosts] = useState([]);
  async function getPosts() {
    const res = await axios.get("/articles");
    const nextData = res.data.list ?? [];
    setPosts(nextData);
  }

  useEffect(() => {
    getPosts();
    console.log(posts);
  }, []);
  return (
    <div>
      <h1 className={styles.title}>베스트 게시글</h1>
      <BestPostBoard />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>게시글</h1>
        <button className={styles.writeButton}>글쓰기</button>
      </div>
      <PostList posts={posts} />
    </div>
  );
}
