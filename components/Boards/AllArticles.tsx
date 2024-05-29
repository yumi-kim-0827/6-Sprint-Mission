import axios from "@/api/axios";
import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PAGE_SIZE_MAX = 10;

export default function AllArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageNum, setPageNum] = useState<number>(1);
  const [orderBy, setOrderBy] = useState<string>("recent");

  const pathName: string = `/articles?${new URLSearchParams({
    page: pageNum.toString(),
    pagesize: PAGE_SIZE_MAX.toString(),
    orderBy: orderBy,
  })}`;

  async function getArticlesByPageNum() {
    try {
      const { data } = await axios.get(pathName);
      setArticles(data.list);
    } catch (e) {
      console.error("failed to fetch", e);
    }
  }

  useEffect(() => {
    getArticlesByPageNum();
  }, [orderBy, pageNum]);

  return (
    <section className="flex flex-col gap-8">
      <div>게시글</div>
      <Link href="/" className="w-20 h-10">
        글쓰기
      </Link>
      {articles &&
        articles.map(function (article) {
          return (
            <article key={article.id}>
              <div>{article.title}</div>
              <div>{article.content}</div>
              {article.image && (
                <Image
                  height={100}
                  width={100}
                  src={article.image}
                  alt={article.title}
                />
              )}
              <div>{article.likeCount}</div>
              <div>{article.createdAt}</div>
              <div>{article.updatedAt}</div>
              <div>{article.writer.nickname}</div>
            </article>
          );
        })}
    </section>
  );
}
