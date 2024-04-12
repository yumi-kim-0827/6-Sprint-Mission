import Main from "./Main.jsx";
import { useEffect, useState } from "react";

export default function Items() {
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
    <>
      <Main items={items} />
    </>
  );
}
