import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layouts";
import Product from "./components/Products";
import AddItem from "./components/AddItem";
import GlobalStyle from "./css/GlobalStyle";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Product />} />
          <Route path="/items" element={<Product />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/items/:productId" element={<ProductDetailPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
