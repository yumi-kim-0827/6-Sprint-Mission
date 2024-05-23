import { BrowserRouter, Route, Routes } from "react-router-dom";
import "css/common.css";
import ItemPage from "pages/item";
import Home from "pages/Home";
import AddItemPage from "pages/additem";
import ItemDetail from "pages/item_detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="items">
            <Route index element={<ItemPage />} />
            <Route path=":productId" element={<ItemDetail />} />
          </Route>
          <Route path="additem" element={<AddItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
