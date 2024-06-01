import instance from "@/lib/axios";
import { useEffect, useState } from "react";
import { ArticleType } from "@/types/type";
import DropdownMenu from "./DropdownMenu";
import axios from "@/lib/axios";
import ArticleList from "./Article";

export default function ArticleBoards() {
  const [article, setArticle] = useState<ArticleType[]>([]);
  const [keyword, setKeyword] = useState("");
  const [orderby, setOrderby] = useState("recent");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  async function getArticle() {
    const res = await axios.get(
      `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderby}&keyword=${keyword}`
    );

    const articlelist = res.data.list;
    setArticle(articlelist);
  }

  useEffect(() => {
    getArticle();
  }, [page, pageSize, orderby]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      getArticle();
    }
  };

  return (
    <>
      <DropdownMenu orderBySort={setOrderby} />
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="검색어를 입력하세요"
      />
      <ArticleList articleList={article} />
    </>
  );
}
