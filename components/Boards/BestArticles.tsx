import axios from "@/lib/axios";
import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PAGE_SIZE = 3;
const ORDER_BY = "like";

export default function BestArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageNum, setPageNum] = useState<number>(1);

  const pathName: string = `/articles?${new URLSearchParams({
    page: pageNum.toString(),
    pageSize: PAGE_SIZE.toString(),
    orderBy: ORDER_BY,
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
  }, [pageNum]);

  return (
    <section className="flex flex-col gap-6">
      <h2 className=" text-xl text-gray-900 font-bold">베스트 게시글</h2>
      <article className="w-[1200px] flex gap-6">
        {articles &&
          articles.map(function (article) {
            return (
              <div className="" key={article.id}>
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
              </div>
            );
          })}
      </article>
    </section>
  );
}
