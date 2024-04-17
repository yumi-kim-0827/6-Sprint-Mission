import Navigator from "./Navigator";
import Content from "./Content";
import { GetItems } from "./GetItems";
import AllItems from "./AllItems";
import { useEffect, useState } from "react";

function App() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleLatestClick = () => setOrder("createdAt");
  const handleMostFavClick = () => setOrder("favoriteCount");

  const handleLoad = async () => {
    const { list } = await GetItems();
    setItems(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Navigator />
      <Content />
      <AllItems items={sortedItems} />
      <button onClick={handleLatestClick}>최신순</button>
      <button onClick={handleMostFavClick}>좋아요순</button>
    </div>
  );
}

export default App;
