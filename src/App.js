import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Products";
import AddItem from "./components/AddItems";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
