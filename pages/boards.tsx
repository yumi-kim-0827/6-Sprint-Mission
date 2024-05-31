import BoardItem from "@/components/BoardItem";
import DropDown from "@/components/DropDown";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axiox";
import { useEffect, useState } from "react";

export default function BoardPage() {
  const [boardList, setBoardList] = useState([]);
  const [bestList, setBestList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");

  async function getBoardList(page = 1, pageSize = 10) {
    const res = await axios.get(
      `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    );
    const nextActicles = res.data.list ?? [];
    setBoardList(nextActicles);
  }
  async function getBestList(page = 1, pageSize = 3) {
    const res = await axios.get(
      `/articles?page=${page}&pageSize=${pageSize}&orderBy=like`
    );
    const nextBestList = res.data.list ?? [];
    setBestList(nextBestList);
  }

  useEffect(() => {
    getBoardList();
  }, [keyword, orderBy]);

  useEffect(() => {
    getBestList();
  }, []);

  return (
    <>
      <SearchForm keyword={keyword} onChangeKeyword={setKeyword} />
      <DropDown order={orderBy} onChangeOrder={setOrderBy} />
      <ul>
        {bestList.map((article) => {
          return (
            <li key={article.id}>
              <BoardItem article={article} />
              best like article
            </li>
          );
        })}
      </ul>
      <ul>
        {boardList.map((article) => {
          return (
            <li key={article.id}>
              <BoardItem article={article} />
              ------------------------------------
            </li>
          );
        })}
      </ul>
    </>
  );
}
