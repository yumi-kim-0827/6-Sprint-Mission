import React from "react";
import Items from "./pages/ItemsPage/Items";
import { Routes, Route } from "react-router-dom";
import AddItem from "./pages/AddItemPage/AddItem";
import "./styles/global.css";

function App() {
  return (
    <Routes>
      <Route path="/items" element={<Items />} />
      <Route path="/additem" element={<AddItem />} />
    </Routes>
  );
}

export default App;
