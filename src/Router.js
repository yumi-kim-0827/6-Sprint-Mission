import { Route, Routes } from "react-router-dom";
import ItemPage from "./pages/items";
import HomePage from "./pages/home";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="items" element={<ItemPage />} />
      </Routes>
    </>
  );
}
