import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import Homepage from "./pages/HomePage/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes path="/">
        <Route index element={<Homepage />} />
        <Route path="items">
          <Route index element={<MarketPage />} />
          <Route path=":productId" element={<ProductDetailPage />} />
        </Route>
        <Route path="additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
