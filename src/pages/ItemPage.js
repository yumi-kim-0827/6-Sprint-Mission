import ItemList from "../components/ItemList";
import { getProducts } from "../services/api";
import { useEffect, useState } from "react";

function ItemPage() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const bestItems = [...items]
    .sort((a, b) => b["favoriteCount"] - a["favoriteCount"])
    .slice(0, 4);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("favoriteCount");
  const fetchData = async (orderQuery) => {
    const { list } = await getProducts(orderQuery);
    setItems(list);
  };

  useEffect(() => {
    fetchData(order);
  }, [order]);

  return (
    <>
      <ItemList items={bestItems} />
      <ItemList items={sortedItems} />
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleBestClick}>좋아요순</button>
    </>
  );
}

export default ItemPage;
