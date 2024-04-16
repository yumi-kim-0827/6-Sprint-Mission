import { useEffect, useState } from "react";
import { getItems } from "../services/api";
import "../styles/main.css";
import BestItemList from "../components/BestItemList";
import { AllItemList } from "../components/AllItemList";

function ItemPage() {
  const [allItems, setAllItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [keyword, setKeyword] = useState("");

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
    const { list } = await getItems(options);
    setAllItems(list);
  };

  useEffect(() => {
    handLoadAllItemList({ order, page, pageSize, keyword });
    handLoadBestItemList();
  }, [order, page, pageSize, keyword]);

  return (
    <main>
      <BestItemList items={bestItems} />
      <AllItemList
        items={allItems}
        handleSortedChange={handleSortedChange}
        className="-all"
        handleSearchSubmit={handleSearchSubmit}
      />
    </main>
  );
}

export default ItemPage;
