import { BASE_URL } from "@/shared/constants/constants";
import { Article, ArticleData } from "@/shared/model";
import { Button } from "@/shared/ui/button";
import {
  OnlyMobileComponent,
  UpperDesktopComponent,
  UpperMobileComponent,
  UpperTabletComponent,
} from "@/shared/ui/mediaQueryComponent";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export const getStaticProps = (async () => {
  const likeRes = await fetch(`${BASE_URL}/articles?pageSize=3&&orderBy=like`);
  const likeData: ArticleData = await likeRes.json();
  const likeList = likeData.list ?? [];
  return { props: { likeList } };
}) satisfies GetStaticProps<{
  likeList: Article[] | [];
}>;

export default function BoardsPage({
  likeList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [article, setArticle] = useState<Article[]>([]);
  const [sort, setSort] = useState<string>("recent");
  const [isLoading, setLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>("");

  const handleClick = (e: ChangeEvent<HTMLDivElement>) => {};

  useEffect(() => {
    fetch(`${BASE_URL}/articles?orderBy=${sort}&&keyword=${keyword}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticle(data.list ?? []);
        setLoading(false);
      });
  }, [sort, keyword]);

  return (
    <>
      <Head>
        <title>자유 게시판</title>
      </Head>
      <article className="flex flex-col gap-4 mt-4 md:mt-6">
        <header className="text-xl font-bold">베스트 게시글</header>
        <section className="flex gap-0 md:gap-4 lg:gap-6">
          <UpperMobileComponent>{likeList[0].content}</UpperMobileComponent>
          <UpperTabletComponent>{likeList[1].content}</UpperTabletComponent>
          <UpperDesktopComponent>{likeList[2].content}</UpperDesktopComponent>
        </section>
      </article>
      <article className="mt-10">
        <form>
          <header className="text-xl font-bold flex justify-between items-center">
            게시글
            <div className="text-base">
              <Button>글쓰기</Button>
            </div>
          </header>
          <section className="flex items-center gap-2 md:gap-4">
            <input
              type="text"
              name="search"
              placeholder="검색할 상품을 입력해주세요."
              className="h-[42px] rounded-xl flex-grow py-2 pl-11 bg-[#f3f4f6] bg-input-placeholder bg-no-repeat bg-left bg-[16px]"
            />
            <button type="button">
              <OnlyMobileComponent>
                <Image
                  className="md:hidden"
                  src="/icons/arrowDownM.png"
                  width={24}
                  height={24}
                  alt="sort button"
                />
              </OnlyMobileComponent>
              <UpperTabletComponent>
                {sort === "recent" ? "최신 순" : "좋아요 순"}
                <Image
                  className="hidden md:inline"
                  width={24}
                  height={24}
                  src="/icons/arrowDown.png"
                  alt="sort button"
                />
              </UpperTabletComponent>
            </button>
          </section>
        </form>
        <section>
          {isLoading ? (
            <div>로딩중입니다.</div>
          ) : (
            article?.map((v) => <div key={v.id}>{v.content}</div>)
          )}
        </section>
      </article>
    </>
  );
}
