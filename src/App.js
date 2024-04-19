import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./css/style.css";
import Product from "./components/Products";
import AddItem from "./components/AddItem";
import GlobalStyle from "./css/GlobalStyle";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/items" element={<Product />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
};