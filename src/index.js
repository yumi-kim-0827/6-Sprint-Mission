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

import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";
import ItemsPage from "./pages/ItemsPage";
import AddItemPage from "./pages/AddItemPage";
import ItemDetailPage from "./pages/ItemDetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/items">
          <Route index element={<ItemsPage />} />
          <Route path=":productId" element={<ItemDetailPage />} />
        </Route>
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="*" element={<Navigate to="/NotFoundPage" />} />
      </Routes>
    </App>
  </Router>
);
