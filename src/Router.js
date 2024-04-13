import { Route, Routes } from "react-router-dom";
import ItemPage from "./pages/items";
import HomePage from "./pages/home";
import { RecoilRoot } from "recoil";

export default function Router() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="items" element={<ItemPage />} />
      </Routes>
    </RecoilRoot>
  );
}
