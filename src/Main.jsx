import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Items from "./pages/items/Items.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import Layout from "./Layout.js";
import { useEffect, useState } from "react";
import AddItem from "./pages/addItem/AddItem.jsx";
import LoginContext from "./contexts/LoginContext.js";
import Board from "./pages/board/Board.jsx";

export default function Main() {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(`https://panda-market-api.vercel.app/products`);
      const data = await res.json();

      setItems(data.list);
      setTotalCount(data.totalCount);
    };
    fetchItems();
  }, []);

  return (
    <LoginContext.Provider value={isLogin}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/items" element={<Items items={items} />} />
            <Route path="/board" element={<Board />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}
