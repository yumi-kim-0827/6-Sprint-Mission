import React from "react";
import HomePage from "./pages/Homepage/Homepage";
import Items from "./pages/ItemsPage/Items";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./pages/AddItemPage/AddItem";
import Navbar from "./components/Layout/Navbar";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/items">
            <Route index element={<Items />} />
            <Route path=":productID" element={<CommunityFeedPage />} />
          </Route>

          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
