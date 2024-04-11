import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AllItemList from "./BestItemLIst";
import { getItems } from "../services/api";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");

  const handLoad = async (orderQuery) => {
    const { list } = await getItems({ orderQuery });
    setItems(list);
  };

  useEffect(() => {
    handLoad(order);
  }, [order]);

  return (
    <>
      <Navbar />
      <AllItemList items={items} />
    </>
  );
}
export default App;
