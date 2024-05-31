import axios from "@/lib/axios";
import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import iconArrow from "@/public/images/icon_arrow_down.png";

const PAGE_SIZE_MAX = 10;

export default function AllArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageNum, setPageNum] = useState<number>(1);
  const [orderBy, setOrderBy] = useState<string>("recent");

  const pathName: string = `/articles?${new URLSearchParams({
    page: pageNum.toString(),
    pageSize: PAGE_SIZE_MAX.toString(),
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
  });

  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className=" text-xl text-gray-900 font-bold">게시글</h2>
        <Link
          className="w-20 h-10 flex justify-center items-center bg-blue-default rounded-button"
          href="/"
        >
          글쓰기
        </Link>
      </div>
      <form className="flex w-full justify-between gap-4">
        <input type="text" className="flex-grow" />
        <div className="w-32 h-10 border-solid border-gray-200 border-[1px] rounded-box flex justify-center items-center gap-3">
          {orderBy === "recent" ? "최신순" : "좋아요순"}
          <Image src={iconArrow} alt="게시물정렬" width={24} height={24} />
        </div>
        <ul className="">
          <li>최신순</li>
        </ul>
      </form>
      <article>
        {articles &&
          articles.map(function (article) {
            return (
              <div key={article.id}>
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
