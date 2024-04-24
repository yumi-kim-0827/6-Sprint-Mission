import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import CommunityPage from "../pages/CommunityPage";
import MarketPage from "../pages/MarketPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="market" element={<MarketPage />} />
        <Route path="community" element={<CommunityPage />} />
      </Routes>
    </BrowserRouter>
  );
}
