import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/users/Login";
import Signup from "pages/users/Signup";
import MarketMainPage from "pages/market";
import FAQ from "pages/supply/FAQ";
import Privacy from "pages/supply/Privacy";
import FreeBoard from "pages/supply/FreeBoard";
import AddItemPage from "pages/market/AddItem";
import ItemPage from "pages/market/Item";
import useScrollTop from "hooks/useScrollTop";

export default function App() {
  useScrollTop();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/items" element={<MarketMainPage />} />
      <Route path="/items/:productId" element={<ItemPage />} />
      <Route path="/free-board" element={<FreeBoard />} />
      <Route path="/additem" element={<AddItemPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}
