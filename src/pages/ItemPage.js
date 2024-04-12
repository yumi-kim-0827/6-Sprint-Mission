import ItemList from "../components/features/ItemList";
import { getProducts } from "../services/api";
import { useEffect, useState } from "react";

function ItemPage() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [isDrop, setIsDrop] = useState(false);
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
  const toggleDropdown = () => {
    setIsDrop(!isDrop);
  };

  useEffect(() => {
    fetchData(order);
  }, [order]);

  return (
    <>
      <h2>베스트 상품</h2>
      <ItemList items={bestItems} />
      <h2>전체 상품</h2>
      <div className="dropdown">
        <button onClick={toggleDropdown}>최신순</button>
        {isDrop && (
          <ul className="dropdown-menu">
            <li onClick={handleNewestClick}>최신순</li>
            <li onClick={handleBestClick}>좋아요순</li>
          </ul>
        )}
      </div>
      <ItemList items={sortedItems} />
    </>
  );
}

export default ItemPage;
