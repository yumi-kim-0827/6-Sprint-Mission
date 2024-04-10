import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Login from "./components/pages/users/login";
import Signup from "./components/pages/users/signup";
import MarketMainPage from "./components/pages/market";
import AddItem from "./components/pages/market/add_item";
import FAQ from "./components/pages/supply/faq";
import Privacy from "./components/pages/supply/privacy";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/items" element={<MarketMainPage />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}
