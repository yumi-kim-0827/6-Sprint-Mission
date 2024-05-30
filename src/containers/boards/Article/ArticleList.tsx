import { useState } from "react";
import useFetchData from "@/src/hooks/useFetchData";
import { ArticleListResponse } from "@/src/interfaces/Article.interface";
import Article from "./Article";
import DropDown from "@/src/components/DropDown/DropDown";
import SearchBar from "@/src/components/SearchBar/SearchBar";
import Spinner from "@/src/components/Spinner/Spinner";

export default function ArticleList() {
  const [orderBy, setOrderBy] = useState("recent");
  const [searchTitle, setSearchTitle] = useState("");

  const fetchArticles = useFetchData<ArticleListResponse>(
    `articles?page=1`,
    10,
    orderBy,
    searchTitle
  );
  const { data: ArticleList, isLoading } = fetchArticles;

  const handleOrderBy = (orderByOption: string) => {
    setOrderBy(orderByOption);
  };
  const handleSearchTitle = (searchKeyword: string) => {
    setSearchTitle(searchKeyword);
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (ArticleList?.totalCount === 0) {
    return <>게시글이 없습니다.</>;
  }

  return (
    <div className="container">
      <div>게시글</div>

      <DropDown orderBy={handleOrderBy} />
      <SearchBar keyword={handleSearchTitle} />

      <div className="list">
        {ArticleList?.list?.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
}
