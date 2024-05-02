import { useEffect, useState } from "react";
import MarketList from "./MarketList";
import { getList } from "../api";

const PAGE_SIZE = 10;

function Market() {
  const [orderBy, setOrderBy] = useState("recent");
  const [items, setItems] = useState([]);

  const sortedItems = items?.sort((a, b) => b[orderBy] - a[orderBy]);

  const handleNewestClick = () => setOrderBy("recent");
  const handleBestClick = () => setOrderBy("favorite");

  const handleLoad = async (options) => {
    const { list } = await getList(options);
    setItems(list);
  };

  useEffect(() => {
    handleLoad({ orderBy, page: 1, pageSize: PAGE_SIZE });
  }, [orderBy]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <MarketList items={sortedItems} />
    </div>
  );
}

export default Market;
