import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Items from "./pages/items/Items.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import Layout from "./Layout.js";
import { useState } from "react";
import AddItem from "./pages/addItem/AddItem.jsx";
import AuthContext from "./contexts/AuthContext.js";
import Board from "./pages/board/Board.jsx";
import ItemDetail from "./pages/items/ItemDetail.jsx";

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
            <Route path="/board" element={<Board />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}
