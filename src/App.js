import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import Product from "./components/Products";
import AddItem from "./components/AddItems";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/items" element={<Product />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/items/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
