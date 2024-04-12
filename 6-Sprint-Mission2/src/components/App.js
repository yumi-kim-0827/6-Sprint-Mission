import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Item from "./item";
import FreeBoard from "./FreeBoard";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/item" element={<Item />} />
        <Route path="/freeboard" element={<FreeBoard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
