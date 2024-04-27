import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemPage from "./pages/ItemPage/ItemPage";
import HomePage from "./pages/HomePage/HomePage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import Header from "./components/Layout/Header";

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
