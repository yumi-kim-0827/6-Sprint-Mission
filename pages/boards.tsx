import React, { useEffect, useState } from "react";
import debounce from "lodash-es/debounce";
import Articles, { ArticleListProps } from "../components/Articles";
import { getArticles } from "../lib/api";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";
import useResizeHandler from "../components/useResizeHandler";
import styles from "../styles/boards.module.css";

const getBestArticlesLimit = () => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    if (width < 768) {
      return 1;
    } else if (width < 1280) {
      return 2;
    } else {
      return 3;
    }
  }
  return 3;
};

export default function Boards() {
  const [articles, setArticles] = useState<ArticleListProps[]>([]);
  const [bestArticles, setBestArticles] = useState<ArticleListProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentOrder, setCurrentOrder] = useState<string>("recent");
  const [filteredArticles, setFilteredArticles] = useState<ArticleListProps[]>(
    []
  );
  const [limit, setLimit] = useState<number>(40);

  const fetchArticles = async (order: string) => {
    setLoading(true);
    try {
      const data = await getArticles({ page: 1, limit: 10, order });
      setArticles(data);
      setFilteredArticles(data);
    } catch (error) {
      console.error("Failed to fetch", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBestArticles = async () => {
    if (typeof window !== "undefined") {
      const bestArticlesLimit = getBestArticlesLimit();
      const bestArticles = await getArticles({
        page: 1,
        limit: 10,
        order: "like",
      });
      const bestArticlesLimited = bestArticles.slice(0, bestArticlesLimit);
      setBestArticles(bestArticlesLimited);
    }
  };

  useEffect(() => {
    fetchArticles(currentOrder);
  }, [currentOrder]);

  useEffect(() => {
    fetchBestArticles();
  }, []);

  const handleSortChange = async (order: string) => {
    setCurrentOrder(order);
    await fetchArticles(order);
  };

  const debouncedFetchArticles = debounce(async (searchTerm: string) => {
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
  }, 300);

  const handleSearch = (searchTerm: string) => {
    debouncedFetchArticles(searchTerm);
  };

  const handleResize = () => {
    fetchBestArticles();
  };

  useResizeHandler(handleResize, 500);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.ArticleSection}>
      <section className={styles.bestArticleSection}>
        <h1>베스트 게시글</h1>
        <Articles articles={bestArticles} />
      </section>
      <section>
        <div>
          <div>
            <h1>게시글</h1>
            <button>글쓰기</button>
          </div>
          <div>
            <SearchBar onSearch={handleSearch} />
            <Dropdown
              onSortByNewest={() => handleSortChange("recent")}
              onSortByBest={() => handleSortChange("like")}
              order={currentOrder}
            />
          </div>
        </div>
        <Articles articles={filteredArticles} />
      </section>
    </section>
  );
}
