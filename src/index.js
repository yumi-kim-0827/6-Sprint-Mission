import "./reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Items from "./components/Items";
import Nav from "./components/Nav.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
