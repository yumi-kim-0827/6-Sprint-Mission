import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./components/Items.jsx";
import App from "./App.js";
import { useEffect, useState, useRef } from "react";

export default function Main() {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  function HomePage() {
    const ref = useRef();

    return (
      <>
        <h1>Home Page</h1>
        <input type="text" ref={ref} />
        <button
          onClick={() => {
            console.log("input value", ref);
          }}
        >
          console.log
        </button>
      </>
    );
  }

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
