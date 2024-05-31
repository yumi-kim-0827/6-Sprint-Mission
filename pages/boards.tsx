import React, { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import axiosInstance from "@/lib/axiosInstance";
import Image from "next/image";

interface List {
  id: number;
  title: string;
  content: string;
  image: null | string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

interface Writer {
  id: number;
  nickname: string;
}

interface BoardsProps {
  articles: List[];
}

interface bestArticle extends List {}

const Boards: React.FC<BoardsProps> = ({ articles }) => {
  const [bestArticles, setBestArticles] = useState<bestArticle[]>([]);

  useEffect(() => {
    setBestArticles([articles[2]]);
  }, [articles]);
  return (
    <div className="container mx-4">
      <h2 className="font-bold text-fs-20">베스트 게시글</h2>
      <div className="w-[343px] h-[167px] px-[24px] pb-[16px] rounded-[8px] bg-cool-gary-50 flex flex-col justify-between gap-4">
        <div className="bg-bland-blue w-[102px] h-[30px] rounded-bottom flex justify-center items-center gap-1 text-white font-semibold">
          <Image
            src={"/ic_best.svg"}
            width={16}
            height={16}
            alt="메달 아이콘"
          />
          <span>Best</span>
        </div>
        {/* 제목과 이미지 */}
        <div className="flex gap-2">
          <div className="font-semibold text-lg leading-5">
            {bestArticles[0]?.title}
          </div>
          {bestArticles[0]?.image ? (
            <div className="rounded-lg bg-white w-[149px] h-[72px] flex items-center justify-center border border-cool-gary-200">
              <Image
                className="object-contain"
                src={bestArticles[0].image}
                alt="첨부이미지"
                width={48}
                height={44}
              />
            </div>
          ) : null}
        </div>
        {/* 작성자, 좋아요, 수정일 */}
        <div className="flex justify-between gap-2">
          <p>{bestArticles[0]?.writer.nickname}</p>
          <p className="flex-auto flex gap-1">
            <img src="/ic_heart.svg" alt="하트아이콘" />
            {bestArticles[0]?.likeCount}
          </p>
          <p className="text-cool-gary-400">
            {new Date(bestArticles[0]?.updatedAt).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
      </div>
      <div className="h-3"></div>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>좋아요: {article.likeCount}</p>
            <p>작성일: {new Date(article.createdAt).toLocaleDateString()}</p>
            <p>수정일: {new Date(article.updatedAt).toLocaleDateString()}</p>
            <p>작성자: {article.writer.nickname}</p>
            <p>작성자ID: {article.writer.id}</p>
            <div>
              {article.image ? (
                <Image
                  src={article.image}
                  alt={"첨부이미지"}
                  width={200}
                  height={200}
                />
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await axiosInstance.get(
    "/articles?page=1&pageSize=10&orderBy=like"
  );
  const articles: List[] = response.data.list;

  return {
    props: {
      articles,
    },
    // 60초마다 페이지를 재생성합니다.
    revalidate: 60,
  };
};

export default Boards;
