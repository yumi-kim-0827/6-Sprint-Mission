import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/common.css";
import "./styles/reset.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import Board from "./pages/Board";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/items" element={<Items />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="*" element={<Navigate to="/NotFound" />} />
      </Routes>
    </App>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
