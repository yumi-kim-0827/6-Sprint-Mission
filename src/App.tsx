import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import Additem from "./pages/additem";
import Items from "./pages/items";
import Board from "./pages/board";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Layout from "./layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="additem" element={<Additem />} />
          <Route path="items" element={<Items />} />
          <Route path="board" element={<Board />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
