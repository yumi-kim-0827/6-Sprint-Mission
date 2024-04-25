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
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="items" element={<MarketPage />} />
        <Route path="items/product" element={<ProductDetailPage />} />
        <Route path="additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
