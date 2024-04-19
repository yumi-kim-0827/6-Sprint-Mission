// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import ItemsPage from "./components/MarketPage/MarketPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import MarketPage from "./components/MarketPage/MarketPage";
import AddItemPage from "./components/AddItemPage/AddItemPage";
import CommunityFeedPage from "./components/CommunityFeedPage/CommunityFeedPage";

function App() {
  return (
    <BrowserRouter className="App">
      <NavigationBar />
      <div>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="community" element={<CommunityFeedPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
