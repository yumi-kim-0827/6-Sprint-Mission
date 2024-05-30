import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddItemPage from "./Pages/AddItemPage";
import ItemsPage from "./Pages/ItemsPage";
import ProductDetailPage from "./Pages/ProductDetailPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/items">
          <Route index element={<ItemsPage />} />
          <Route path="/items/:id" element={<ProductDetailPage />} />
        </Route>
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
