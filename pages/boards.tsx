import { useEffect, useState } from "react";
import Articles, { ArticleListProps } from "../components/Articles";
import { getArticles } from "../lib/api";

export default function Boards() {
  const [articles, setArticles] = useState<ArticleListProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await getArticles({ page: 1, limit: 10, order: "recent" });
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

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
        </div>
        <Articles articles={articles} />
      </section>
    </section>
  );
}
