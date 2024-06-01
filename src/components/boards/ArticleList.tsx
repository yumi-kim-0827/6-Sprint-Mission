import { ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import { Article, DataFormat, Query } from "@/models/api_response";
import Order from "@/models/order";
import Button from "@/components/commons/Button";
import Input from "@/components/commons/Input";
import Dropdown from "@/components/commons/Dropdown";
import Pagination from "@/components/commons/Pagination";
import ArticlePreview from "./ArticlePreview";

const PAGE_SIZE = 5;

export default function ArticleList({
  articleListData,
}: {
  articleListData: DataFormat<Article>;
}) {
  const router = useRouter();
  const {
    keyword: initialKeyword,
    orderBy: initialOrder,
    page: initialPage,
  } = router.query;

  const [keyword, setKeyword] = useState(initialKeyword || "");
  const [currentPage, setCurrentPage] = useState(initialPage || 1);
  const [currentOrder, setCurrentOrder] = useState<Order | Query>(
    !initialOrder || initialOrder === "최신순" ? Order.recent : Order.likes,
  );

  const { list: articleList, totalCount } = articleListData;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setKeyword(value);
    setCurrentPage(1);
  };

  const handleSearch = (value: Query) => {
    router.push({
      query: { ...router.query, keyword: value, page: 1 },
    });
    setCurrentPage(1);
  };

  const handleOrder = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    if (name === "sort-by-recent") {
      setCurrentOrder(Order.recent);
      router.push({ query: { ...router.query, orderBy: "recent" } });
    }

    if (name === "sort-by-likes") {
      setCurrentOrder(Order.likes);
      router.push({ query: { ...router.query, orderBy: "like" } });
    }
  };

  const handlePageChange = (targetPage: number) => {
    setCurrentPage(targetPage);
    router.push({ query: { ...router.query, page: String(targetPage) } });
  };

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
          handleSearch={handleSearch}
        />
        <Dropdown.Order currentOrder={currentOrder} handleOrder={handleOrder} />
      </div>

      <div className="mt-6">
        {articleList.map((article) => (
          <ArticlePreview key={article.id} data={article} />
        ))}
      </div>

      {totalCount > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalCount / PAGE_SIZE)}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}
