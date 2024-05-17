import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { ItemPage } from "./page/ItemPage";
import { HomePage } from "./page/HomePage";
import { AddItemPage } from "./page/AddItemPage";
import { ItemDetailPage } from "./page/ItemDetailPage";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ItemPage />} />
          <Route path="items">
            <Route index element={<ItemPage />} />
            <Route path=":productId" element={<ItemDetailPage />} />
          </Route>
          <Route path="additem" element={<AddItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
