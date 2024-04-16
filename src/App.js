import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./pages/Header";
import Items from "./pages/Items";
import AddItems from "./pages/AddItems";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/items" element={<Items />} />
        <Route path="/additems" element={<AddItems />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
