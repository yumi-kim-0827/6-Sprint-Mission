import "../styles/ItemPage.css";
import { useEffect, useState } from "react";
import { getItems } from "../services/api";
import "../styles/main.css";
import BestItemList from "../components/BestItemList";
import { AllItemList } from "../components/AllItemList";
import Pagination from "../components/Pagination";

function ItemListPage() {
  const [allItems, setAllItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1); // 현재 페이지
  const [pageSize, setPageSize] = useState(10); // 페이지 당 상품 수
  const [totalItemCount, setTotalItemCount] = useState(0); // 총 상품 갯수

  const handleSortedChange = (e) => {
    setOrder(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target["search"].value);

    handLoadAllItemList(keyword);
  };
  const handLoadBestItemList = async () => {
    const { list } = await getItems({
      order: "favorite",
      pageSize: 4,
    });
    setBestItems(list);
  };
  const handLoadAllItemList = async (options) => {
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
