import { ChangeEvent, MouseEvent, useState } from "react";
import Navbar from "@/components/commons/Navbar";
import Dropdown from "@/components/commons/Dropdown";
import Layout from "@/components/commons/Layout";
import Order from "@/models/order";
import ArticleCard from "@/components/boards/ArticleCard";
import ArticlePreview from "@/components/boards/ArticlePreview";
import useResponsive from "@/hooks/useResponsive";
import Button from "@/components/commons/Button";
import Input from "@/components/commons/Input";

function BestArticles() {
  return (
    <div className="mt-6">
      <h1 className="text-xl font-bold text-cool-gray-900">베스트 게시글</h1>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6">
        <ArticleCard />
        {/* <ArticleCard />
        <ArticleCard /> */}
      </div>
    </div>
  );
}
interface ArticleListProps {
  keyword: string;
  currentOrder: Order;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrder: (e: MouseEvent<HTMLButtonElement>) => void;
}

function ArticleList({
  keyword,
  currentOrder,
  handleInputChange,
  handleOrder,
}: ArticleListProps) {
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
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
      </div>
    </div>
  );
}

export default function FreeBoard() {
  const [currentOrder, setCurrentOrder] = useState<Order>(Order.recent);
  const [keyword, setKeyword] = useState("");
  const [isMobile, isTablet, isPC] = useResponsive();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const handleOrder = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    if (name === "sort-by-recent") setCurrentOrder(Order.recent);
    if (name === "sort-by-likes") setCurrentOrder(Order.likes);
  };

  return (
    <>
      <Navbar />
      <Layout.Main>
        <BestArticles />
        <ArticleList
          keyword={keyword}
          currentOrder={currentOrder}
          handleInputChange={handleInputChange}
          handleOrder={handleOrder}
        />
      </Layout.Main>
    </>
  );
}
