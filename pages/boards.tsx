import React, { useEffect, useState } from "react";
import { getArticlesApi } from "@/lib/api";
import BoardList from "@/src/components/BoardList";
import Title from "@/src/components/Title";

export interface ArticleType {
  content: string;
  createdAt: string;
  id: number;
  image: string | null;
  likeCount: number;
  title: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export interface ArticleArrayType {
  list: ArticleType[];
  totalCount: number;
}

const Boards = () => {
  const [articles, setArticles] = useState<ArticleArrayType["list"]>([]);

  const getArticles = async () => {
    try {
      const articles: ArticleArrayType = await getArticlesApi();
      const { list }: { list: ArticleArrayType["list"] } = articles;
      setArticles(list);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main className="max-w-[1200px] px-4 py-4 mx-auto grid gap-10 sm:px-6 sm:py-6">
      <section className="grid gap-4 md:gap-6">
        <Title>베스트 게시글</Title>
      </section>

      <section className="grid gap-4 md:gap-6">
        <Title>게시글</Title>
        <ul>
          {articles?.map((article) => {
            return (
              <li
                className="grid gap-4 py-6 border-b border-b-gray-200"
                key={article.id}
              >
                <BoardList list={article} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Boards;
