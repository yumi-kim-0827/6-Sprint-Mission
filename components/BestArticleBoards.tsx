import instance from "@/lib/axios";
import { useEffect, useState } from "react";
import { ArticleType } from "@/types/type";
import DropdownMenu from "./DropdownMenu";
import axios from "@/lib/axios";
import BestArticleList from "./BestArticle";
import styles from "@/styles/BestArticleBoards.module.css";

export default function BestArticleBoards() {
  const [article, setArticle] = useState<ArticleType[]>([]);
  const [orderby, setOrderby] = useState("like");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  async function getArticle() {
    const res = await axios.get(
      `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderby}`
    );

    const articlelist = res.data.list;
    setArticle(articlelist);
  }

  useEffect(() => {
    getArticle();
  }, [page, pageSize]);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setPageSize(1); // 모바일 기기
      } else if (width >= 768 && width < 1024) {
        setPageSize(2); // 태블릿
      } else {
        setPageSize(3); // 데스크탑 (1024px 이상)
      }
    };

    // 컴포넌트 마운트 시 한 번 실행
    handleWindowSizeChange();

    // 윈도우 크기 변경 시 실행
    window.addEventListener("resize", handleWindowSizeChange);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <div className={styles["Boards-header-title"]}>베스트 게시글</div>
      <div className={styles["Boards-container"]}>
        <BestArticleList articleList={article} />
      </div>
    </>
  );
}
