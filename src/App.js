import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import AddProductPage from "./pages/AddProductPage";
import { PAGES } from "./constants/paths";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={PAGES.home.link} element={<MainPage />} />
      <Route path={PAGES.products.link} element={<ProductsPage />} />
      <Route path={PAGES.addProduct.link} element={<AddProductPage />} />
    </Routes>
  );
}

export default App;
