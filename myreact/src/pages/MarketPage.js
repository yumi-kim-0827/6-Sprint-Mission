import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import { getProducts } from "../api/api";
import Dropdown from "../components/Dropdown";

function MarketPage() {

  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");

  const handleBestClick = () => setOrder("favoriteCount");

  // const handleChange = (DropdownOption) => setOrder(DropdownOption);

  const handleLoad = async (orderQuery) => {
    const { list } = await getProducts(orderQuery);
    setItems(list);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <div>
      <div>
        <p>베스트상품</p>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>좋아요순</button>
        {/* <Dropdown onChange={handleChange} /> */}
        <Dropdown />
      </div>
      <p>전체 상품</p>
      <ProductsList items={sortedItems} />
    </div>
  );
}

export default MarketPage;