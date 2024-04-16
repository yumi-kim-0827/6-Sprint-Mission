import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemPage from "../pages/ItemPage";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
