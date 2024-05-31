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
import { ChangeEvent, useEffect, useState } from "react";

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
  const [value, setValue] = useState<string>("");
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setKeyword(value);
  };

  const handleClick = () => {
    setIsOpenDropDown(() => !isOpenDropDown);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/articles?orderBy=${sort}&&keyword=${keyword}`)
      .then((res) => res.json())
      .then((data) => {
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
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-6">
          <UpperMobileComponent>{likeList[0].content}</UpperMobileComponent>
          <UpperTabletComponent>{likeList[1].content}</UpperTabletComponent>
          <UpperDesktopComponent>{likeList[2].content}</UpperDesktopComponent>
        </section>
      </article>
      <article className="mt-10">
        <header className="text-xl font-bold flex justify-between items-center">
          게시글
          <div className="text-base">
            <Button>글쓰기</Button>
          </div>
        </header>
        <form onSubmit={handleSubmit}>
          <section className="flex items-center gap-2 md:gap-4 mt-4 md:mt-6 mb-6">
            <input
              type="text"
              name="search"
              placeholder="검색할 상품을 입력해주세요."
              onChange={handleChange}
              value={value}
              className="h-[42px] rounded-xl flex-grow py-2 pl-11 bg-[#f3f4f6] bg-input-placeholder bg-no-repeat bg-[16px]"
            />
            <button
              type="button"
              onClick={handleClick}
              className="flex items-center border-[#e5e7eb] border rounded-xl p-[9px] md:px-5 md:py-3 text-base h-[42px] relative"
            >
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
                <div className="flex gap-[14px]">
                  {sort === "recent" ? "최신 순" : "좋아요 순"}
                  <Image
                    className="hidden md:inline"
                    width={24}
                    height={24}
                    src="/icons/arrowDown.png"
                    alt="sort button"
                  />
                </div>
              </UpperTabletComponent>
              {isOpenDropDown && (
                <ul className="absolute top-0 right-0 w-[125px] bg-white border border-[#e5e7eb] rounded-xl">
                  <li className="h-[42px] flex justify-center items-center border-[#e5e7eb] border hover:bg-[#9CA3AF]">
                    최신 순
                  </li>
                  <li className="h-[42px] flex justify-center items-center border-[#e5e7eb] border hover:bg-[#9CA3AF]">
                    좋아요 순
                  </li>
                </ul>
              )}
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
