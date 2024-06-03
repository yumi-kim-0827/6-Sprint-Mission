import { useEffect, useState } from "react";
import BestPostList from "@/components/BestPostList";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import axios from "@/pages/api/axios";

export default function Home() {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    const res = await axios.get("/articles/{articleId}");
    const articles = res.data.results ?? [];
    //like 가 많은 순으로 order
    articles.sort((a, b) => b.like - a.like);
    //get the top 3 articles
    const topArticles = articles.slice(0, 3);
    setArticles(topArticles);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Header />
      <BestPostList className={styles.BestPostList} articles={articles} />
    </>
  );
}
