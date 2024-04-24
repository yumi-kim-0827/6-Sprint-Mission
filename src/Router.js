import { Route, Routes } from "react-router-dom";
import ItemPage from "./pages/items";
import MarketPage from "./pages/market";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="items" element={<MarketPage />} />
      <Route path="items/:id" element={<ProductPage />} />
      <Route path="additem" element={<ItemPage />} />
    </Routes>
  );
}
