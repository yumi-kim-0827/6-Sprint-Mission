import BoardItem from "@/components/BoardItem";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axiox";
import { useEffect, useState } from "react";

export default function BoardPage() {
  const [boardList, setBoardList] = useState([]);
  const [bestList, setBestList] = useState([]);
  const [keyword, setKeyword] = useState("");

  async function getBoardList(
    page = 1,
    pageSize = 10,
    orderBy = "recent",
  ) {
    const res = await axios.get(
      `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    );
    const nextActicles = res.data.list;
    setBoardList(nextActicles);
  }
  useEffect(() => {
    getBoardList();
  }, [keyword]);

  return (
    <>
      <SearchForm keyword={keyword} onChangeKeyword={setKeyword} />
      {boardList.map((article) => {
        return (
          <li id={article.id}>
            <BoardItem article={article} />
            ------------------------------------
          </li>
        );
      })}
    </>
  );
}
