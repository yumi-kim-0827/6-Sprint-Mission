import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SigninPage/SignupPage";
import Items from "./pages/ItemsPage/Items";
import AddItem from "./pages/AddItemPage/AddItem";
import Navbar from "./components/Layout/Navbar";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage";
import "./styles/global.css";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/signin", "/signup"];

  return (
    <div>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/items">
          <Route index element={<Items />} />
          <Route path=":productID" element={<CommunityFeedPage />} />
        </Route>
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
