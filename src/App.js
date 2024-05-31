import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import UploadProducts from "./pages/UploadProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Items from "./pages/Items";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="Page">
        <Routes>
          <Route path="items" element={<Items />} />
          <Route path="additem" element={<UploadProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
