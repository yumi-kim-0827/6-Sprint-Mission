import React from "react";
import Items from "../pages/Items";
import { Routes, Route } from "react-router-dom";
import AddItem from "../pages/AddItem";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/items" element={<Items />} />
      <Route path="/additem" element={<AddItem />} />
    </Routes>
  );
}

export default App;
