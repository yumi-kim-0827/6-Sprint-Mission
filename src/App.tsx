import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemPage from "./pages/item-list/ItemPage";
import HomePage from "./pages/home/HomePage";
import AddItemPage from "./pages/add-item/AddItemPage";
import ItemDetailPage from "./pages/item-detail/ItemDetailPage";
import Header from "components/layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
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

export default App;
