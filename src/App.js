import { useEffect, useState } from "react";
import Navbar from "./components/NavBar.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemPage from "./components/ItemPage.js";
import Home from "./components/Home.js";

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
