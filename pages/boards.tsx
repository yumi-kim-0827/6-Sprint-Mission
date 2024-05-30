import { useEffect, useState } from "react";
import Header from "@/components/Header";
import axios from "@/lib/axios";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/boards.module.css";

export default function Boards() {
  const [articles, setarticles] = useState([]);

  async function getPosts() {
    const res = await axios.get("/articles");
    const nextPosts = res.data.results;
    setarticles(nextPosts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.boardsContainer}>
        <h2>베스트 게시글</h2>
        <div className={styles.boardsPost}>
          <h2>게시글</h2>
          <button className={styles.searchButton}>검색</button>
        </div>
        <div className={styles.boards}>
          <SearchForm />
        </div>
      </div>
    </>
  );
}
