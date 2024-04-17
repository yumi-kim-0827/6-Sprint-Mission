import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./pages/items/Items.jsx";
import HomePage from "./pages/HomePage.jsx";
import App from "./App.js";
import { useEffect, useState } from "react";
import AddItem from "./pages/addItem/AddItem.jsx";

export default function Main() {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/items" element={<Items items={items} />} />
          <Route path="/additem" element={<AddItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
