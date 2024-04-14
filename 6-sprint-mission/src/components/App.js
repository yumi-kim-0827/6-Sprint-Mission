import { useEffect, useState } from "react";
import { getProducts } from "../api";
import Header from "./Header.js";
import ProductList from "./ProductList.js";

function App() {
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);

  // 정렬, 최신 순 또는 좋아요 순
  const [order, setOrder] = useState("favoriteCount");
  //const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const sortedItems = items ? items.sort((a, b) => b[order] - a[order]) : [];

  const handleNewestClick = () => setOrder("updatedAt");
  const handleBestClick = () => setOrder("favoriteCount");

  const handleLoad = async (orderQuery) => {
    const products = await getProducts(orderQuery);
    setItems(products.list);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <div>
      <Header />
      <div>
        <ProductList items={sortedItems} />
      </div>
    </div>
  );
}

export default App;
