import { Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Login from "pages/users/login";
import Signup from "pages/users/signup";
import MarketMainPage from "pages/market";
import FAQ from "pages/supply/faq";
import Privacy from "pages/supply/privacy";
import FreeBoard from "pages/supply/free_board";
import AddItemPage from "pages/market/add_item";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/items" element={<MarketMainPage />} />
        <Route path="/free-board" element={<FreeBoard />} />
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}
