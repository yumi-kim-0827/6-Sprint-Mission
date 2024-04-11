import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AllItemList } from "./AllItemList";
import { getItems } from "../services/api";
import BestItemList from "./BestItemList";
import "../styles/main.css";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [keyword, setKeyword] = useState("");

  const handleSortedChange = (e) => {
    setOrder(e.target.value);
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
    handLoadBestItemList();
  }, []);

  useEffect(() => {
    handLoadAllItemList({ order, page, pageSize });
  }, [order, page, pageSize]);

  return (
    <>
      <Navbar />
      <main>
        <BestItemList items={bestItems} />
        <AllItemList
          items={allItems}
          handleSortedChange={handleSortedChange}
          className="-all"
        />
      </main>
    </>
  );
}
export default App;
