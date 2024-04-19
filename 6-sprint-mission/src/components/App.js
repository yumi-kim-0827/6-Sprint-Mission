import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.js";
import MarketPage from "../pages/MarketPage/MarketPage.js";
import AddItemPage from "../pages/AddItemPage/AddItemPage.js";

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
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="products" element={<MarketPage />} />
        <Route path="additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
