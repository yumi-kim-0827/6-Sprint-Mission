import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { ItemPage } from "./page/ItemPage";
import { AddItemPage } from "./page/AddItemPage";
import { ItemDetailPage } from "./page/ItemDetailPage";
import { HomePage } from "./page/HomePage";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="items" element={<App />}>
            <Route index element={<ItemPage />} />
            <Route path=":productId" element={<ItemDetailPage />} />
          </Route>
          <Route path="additem" element={<AddItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
