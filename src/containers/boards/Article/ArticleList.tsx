import { useState } from "react";
import useFetchData from "@/src/hooks/useFetchData";
import ArticleListResponse from "@/src/interfaces/Article.interface";
import Article from "./Article";
import DropDown from "@/src/components/DropDown/DropDown";
import SearchBar from "@/src/components/SearchBar/SearchBar";

export default function ArticleList() {
  const [orderBy, setOrderBy] = useState("recent");
  const [searchTitle, setSearchTitle] = useState("");

  const fetchArticles = useFetchData<ArticleListResponse>(
    `articles?page=1`,
    10,
    orderBy,
    searchTitle
  ) || { list: [], totalCount: 0 };
  const { list: ArticleList } = fetchArticles;

  const handleOrderBy = (orderByOption: string) => {
    setOrderBy(orderByOption);
  };

  const handleSearchTitle = (searchKeyword: string) => {
    setSearchTitle(searchKeyword);
  };

  return (
    <div className="container">
      <br />
      <div>게시글</div>

      <DropDown orderBy={handleOrderBy} />
      <SearchBar keyword={handleSearchTitle} />

      <div className="list">
        {ArticleList?.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
}
