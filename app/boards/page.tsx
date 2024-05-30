import BestList from "@/components/Board/BestList";
import styles from "@/app/boards/BoardPage.module.css";
import SearchTitle from "@/components/Board/SearchTitle";
import { List, RootObject, BASE_URL } from "@/app/apis/getArticle";

interface Props {
  searchParams?: {
    page?: string;
    pageSize?: string;
    orderBy?: string;
    keyword?: string;
  };
}

export default async function BoardPage({ searchParams }: Props) {
  const page = parseInt(searchParams?.page || "1");
  const pageSize = parseInt(searchParams?.pageSize || "10");
  const orderBy = searchParams?.orderBy || "recent";
  const keyword = searchParams?.keyword || "";

  const [articlesRes, bestListRes] = await Promise.all([
    fetch(
      `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
      { cache: "no-store" }
    ),
    fetch(`${BASE_URL}/articles?page=1&pageSize=3&orderBy=like`, {
      cache: "no-store",
    }),
  ]);

  const [articlesData, bestListData] = await Promise.all([
    articlesRes.json(),
    bestListRes.json(),
  ]);

  const articles: List[] = (articlesData as RootObject).list;
  const bestList: List[] = (bestListData as RootObject).list;

  return (
    <div>
      <div className={styles.bestBoardTitle}>베스트 게시글</div>
      <div>
        <BestList bestList={bestList} />
      </div>
      <div className={styles.boardListTitle}>게시글</div>
      <SearchTitle
        articles={articles}
        keyword={keyword}
        page={page}
        pageSize={pageSize}
      />
    </div>
  );
}
