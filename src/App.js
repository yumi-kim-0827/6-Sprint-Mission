import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemPage from "./pages/ItemPage";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

const Items = () => {
  return (
    <>
      <Navbar />
      <ItemPage />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
