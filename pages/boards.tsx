import React, { useEffect, useState } from "react";
import Articles, { ArticleListProps } from "../components/Articles";
import { getArticles } from "../lib/api";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";

export default function Boards() {
  const [articles, setArticles] = useState<ArticleListProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentOrder, setCurrentOrder] = useState<string>("recent");
  const [filteredArticles, setFilteredArticles] = useState<ArticleListProps[]>(
    []
  );

  const fetchArticles = async (order: string) => {
    setLoading(true);
    try {
      const data = await getArticles({ page: 1, limit: 10, order: order });
      setArticles(data);
      setFilteredArticles(data);
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

  const handleSearch = (searchTerm: string) => {
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
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
