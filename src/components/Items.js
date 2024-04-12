import Main from "./Main.js";
import { useEffect, useState } from "react";

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(`https://panda-market-api.vercel.app/products`);
      const data = await res.json();

      setItems(data.list);
    };
    fetchItems();
  }, []);

  return (
    <>
      <Main items={items} />
    </>
  );
}
