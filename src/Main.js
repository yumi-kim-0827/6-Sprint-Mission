import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddItemPage from "./Pages/AddItemPage";
import ItemsPage from "./Pages/ItemsPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
