import "../styles/ItemPage.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getItems } from "../services/api";
import "../styles/main.css";
import BestItemList from "../components/ItemListPage/BestItemList";
import Pagination from "../components/ItemListPage/Pagination";
import Item from "constants/Item";
import { AllItemList } from "components/ItemListPage/AllItemList";

interface ItemListOptions {
  order: string;
  page: number;
  pageSize: number;
  keyword?: string;
}

function ItemListPage() {
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [bestItems, setBestItems] = useState<Item[]>([]);
  const [order, setOrder] = useState<string>("recent");
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState<number>(1); // 현재 페이지
  const [pageSize, setPageSize] = useState<number>(10); // 페이지 당 상품 수
  const [totalItemCount, setTotalItemCount] = useState<number>(0); // 총 상품 갯수

  const handleSortedChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
  };
  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;
    setKeyword(target.search.value);

    handLoadAllItemList({ order, page, pageSize, keyword });
  };
  const handLoadBestItemList = async () => {
    const { list } = await getItems({
      order: "favorite",
      pageSize: 4,
    });
    setBestItems(list);
  };
  const handLoadAllItemList = async (options: ItemListOptions) => {
    const { list, totalCount } = await getItems(options);
    setAllItems(list);
    setTotalItemCount(totalCount);
  };

  useEffect(() => {
    handLoadAllItemList({ order, page, pageSize, keyword });
    handLoadBestItemList();

    const handleWindowResize = () => {
      const windowWidth = window.innerWidth;
      const pageSize = windowWidth <= 767 ? 4 : windowWidth <= 1199 ? 6 : 10;
      setPageSize(pageSize);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [order, page, pageSize, keyword]);

  return (
    <main className="item-main">
      <BestItemList items={bestItems} />
      <AllItemList
        items={allItems}
        handleSortedChange={handleSortedChange}
        className="-all"
        handleSearchSubmit={handleSearchSubmit}
      />
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        totalPage={Math.ceil(totalItemCount / pageSize)}
      />
    </main>
  );
}

export default ItemListPage;
