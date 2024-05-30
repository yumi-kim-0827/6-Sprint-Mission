import React, { useEffect, useState } from "react";
import Articles, { ArticleListProps } from "../components/Articles";
import { getArticles } from "../lib/api";
import Dropdown from "../components/Dropdown";

export default function Boards() {
  const [articles, setArticles] = useState<ArticleListProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentOrder, setCurrentOrder] = useState<string>("recent");

  const fetchArticles = async (order: string) => {
    setLoading(true);
    try {
      const data = await getArticles({ page: 1, limit: 10, order: order });
      setArticles(data);
    } catch (error) {
      console.error("Failed to fetch", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles("recent");
  }, []);

  const handleSortChange = async (order: string) => {
    setCurrentOrder(order);
    await fetchArticles(order);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <section>
        <h1>베스트 게시글</h1>
      </section>
      <section>
        <div>
          <h1>게시글</h1>
          <button>글쓰기</button>
          <Dropdown
            onSortByNewest={() => handleSortChange("recent")}
            onSortByBest={() => handleSortChange("like")}
            order={currentOrder}
          />
        </div>
        <Articles articles={articles} />
      </section>
    </section>
  );
}
