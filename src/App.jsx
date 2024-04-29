import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Items from "./pages/Items/Items.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Layout from "./Layout.js";
import { useState } from "react";
import AddItem from "./pages/AddItem/AddItem.jsx";
import AuthContext from "./contexts/AuthContext.js";
import FreeBoard from "./pages/FreeBoard/FreeBoard.jsx";
import ItemDetail from "./pages/ItemDetail/ItemDetail.jsx";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={isLogin}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/items" element={<Items />} />
            <Route path="/products/:id" element={<ItemDetail />} />
            <Route path="/freeboard" element={<FreeBoard />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}
