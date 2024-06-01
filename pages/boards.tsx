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
    <div className="container m-auto w-[343px] md:w-[696px]">
      <h2 className="font-bold text-fs-20 mb-4">베스트 게시글</h2>
      <div className="w-[343px] h-[167px] px-[24px] pb-[16px] rounded-[8px] bg-cool-gary-50 flex flex-col justify-between">
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
        <div className="flex gap-2 flex-between ">
          <div className="font-semibold text-lg leading-5 text-clip w-[212px]  h-[72px]">
            {bestArticles[0]?.title}
          </div>
          {bestArticles[0]?.image ? (
            <div className="rounded-lg bg-white w-[72px] h-[72px] flex items-center justify-center border border-cool-gary-200">
              <Image
                className="object-contain"
                src={bestArticles[0].image}
                alt="첨부이미지"
                width={48}
                height={42}
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
      <div className="container flex justify-between items-center mt-10 mb-4">
        <h2 className="font-bold text-fs-20">게시글</h2>
        <button className="w-btn-width h-btn-height bg-bland-blue rounded-lg text-white font-semibold">
          글쓰기
        </button>
      </div>
      <div className="container flex justify-between items-center mb-6 relative">
        <Image
          className="absolute left-4"
          src={"/ic_search.svg"}
          alt="검색아이콘"
          width={24}
          height={24}
        />
        <input
          className="w-[293px] md:w-[560px] h-[42px] rounded-2xl bg-cool-gary-100 py-4 pl-11"
          placeholder="검색할 상품을 입력해주세요."
        />
        {/* <Image src={"/ic_sort.svg"} alt="정렬아이콘" width={42} height={42} /> */}
        <div className="flex items-center gap-[14px] rounded-lg border px-5  h-[42px]">
          <span>최신순</span>
          <Image
            src={"/ic_arrow.svg"}
            alt="드롭다운화살표"
            width={24}
            height={24}
          />
        </div>
      </div>
      <ul>
        {articles.map(article => (
          <li
            className="w-[343px] md:w-[696px] h-[136px] border-b mt-6 justify-between flex flex-col pb-6"
            key={article.id}
          >
            <div className="flex justify-between gap-2">
              <p className="text-clip w-[263px] h-[72px] flex-auto font-semibold text-lg leading-5">
                {article.title}
              </p>
              {article.image ? (
                <div className="rounded-lg bg-white w-[72px] h-[72px] flex items-center justify-center border border-cool-gary-200">
                  <Image
                    src={article.image}
                    alt={"첨부이미지"}
                    width={48}
                    height={42}
                  />
                </div>
              ) : null}
            </div>
            <div className="flex justify-between items-center gap-2">
              <Image
                src={"/ic_profile.svg"}
                alt="프로필이미지"
                width={24}
                height={24}
              />
              <p>{article.writer.nickname}</p>
              <p className="flex-auto text-cool-gary-400">
                {new Date(article.updatedAt).toLocaleDateString()}
              </p>
              <div className="w-[82px] flex justify-end gap-2">
                <Image
                  src="/ic_heart.svg"
                  alt="하트아이콘"
                  width={16}
                  height={16}
                />
                <p>{article.likeCount}</p>
              </div>
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
