import BoardItem from "@/components/BoardItem";
import axios from "@/lib/axiox";
import { useEffect, useState } from "react";

export default function BoardPage() {
  const [boardList, setBoardList] = useState([]);
  const [bestList, setBestList] = useState([]);

  async function getBoardList(page = 1, pageSize = 10, orderBy = "recent") {
    const res = await axios.get(
      `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
    );
    const nextActicles = res.data.list;
    setBoardList(nextActicles);
  }
  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <>
      {boardList.map((article) => {
        return <BoardItem article={article} />;
      })}
    </>
  );
}
