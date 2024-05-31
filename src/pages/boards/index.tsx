import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import Navbar from "@/components/commons/Navbar";
import Dropdown from "@/components/commons/Dropdown";
import Layout from "@/components/commons/Layout";
import Order from "@/models/order";
import ArticleCard from "@/components/boards/ArticleCard";
import ArticlePreview from "@/components/boards/ArticlePreview";
import Button from "@/components/commons/Button";
import Input from "@/components/commons/Input";
import useAxiosFetch from "@/hooks/useAxiosFetch";
import { Article, DataFormat } from "@/models/api_response";
import useDeviceState, { Device } from "@/hooks/useDeviceState";

export default function FreeBoard() {
  return (
    <>
      <Navbar />
      <Layout.Main>
        <BestArticles />
        <ArticleList />
      </Layout.Main>
    </>
  );
}

function BestArticles() {
  const [articleList, setArticleList] = useState<Article[]>([]);
  const { isLoading, error, axiosFetch } = useAxiosFetch();
  const deviceState = useDeviceState();

  const getArticles = async (pageSize: number) => {
    const res = await axiosFetch<AxiosResponse<DataFormat<Article>>>({
      url: "/articles",
      params: {
        pageSize,
        orderBy: "like",
      },
    });

    setArticleList(res?.data?.list);
  };

  useEffect(() => {
    let pageSize = 1;
    if (deviceState === Device.MOBILE) pageSize = 1;
    if (deviceState === Device.TABLET) pageSize = 2;
    if (deviceState === Device.PC) pageSize = 3;

    getArticles(pageSize);
  }, [deviceState]);

  if (isLoading) return null;

  return (
    <div className="mt-6">
      <h1 className="text-xl font-bold text-cool-gray-900">베스트 게시글</h1>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6">
        {articleList.map((article) => (
          <ArticleCard key={article.id} data={article} />
        ))}
      </div>
    </div>
  );
}

function ArticleList() {
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Order>(Order.recent);
  const [keyword, setKeyword] = useState("");
  const { isLoading, error, axiosFetch } = useAxiosFetch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const handleOrder = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    if (name === "sort-by-recent") setCurrentOrder(Order.recent);
    if (name === "sort-by-likes") setCurrentOrder(Order.likes);
  };

  // TODO: page
  const getArticles = async () => {
    const res = await axiosFetch<AxiosResponse<DataFormat<Article>>>({
      url: "/articles",
      params: {
        orderBy: currentOrder === "최신순" ? "recent" : "like",
        keyword,
      },
    });

    setArticleList(res?.data?.list);
  };

  useEffect(() => {
    getArticles();
  }, [currentOrder, keyword]);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-cool-gray-900">게시글</h1>
        <Button.Link href="/boards/write">글쓰기</Button.Link>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-6 md:gap-4">
        <Input.Search
          value={keyword}
          placeholder="검색할 상품을 입력해주세요"
          onChange={handleInputChange}
        />
        <Dropdown.Order currentOrder={currentOrder} handleOrder={handleOrder} />
      </div>

      <div className="mt-6">
        {articleList.map((article) => (
          <ArticlePreview key={article.id} data={article} />
        ))}
      </div>
    </div>
  );
}
