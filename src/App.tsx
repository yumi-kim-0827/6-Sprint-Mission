import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import MarketPage from "./pages/MarketPage";
import AddItemPage from "./pages/AddItemPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/items" element={<MarketPage />}></Route>
        <Route path="/additem" element={<AddItemPage />}></Route>
        <Route path="/items/:productId" element={<ProductDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
