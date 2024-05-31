import { useEffect, useState } from "react";
import BestPostList from "@/components/BestPostList";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import axios from "@/pages/api/axios";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  async function getArticles() {
    try {
      const res = await axios.get("/articles/{articleId}");
      const articles = res.data.results ?? [];
      //like 가 많은 순으로 order
      articles.sort((a, b) => b.like - a.like);
      //get the top 3 articles
      const topArticles = articles.slice(0, 3);
      setArticles(topArticles);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching articles", err);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  if (error) {
    return <div>Error loading articles: {error}</div>;
  }

  return (
    <>
      <Header />
      <BestPostList className={styles.BestPostList} articles={articles} />
    </>
  );
}
