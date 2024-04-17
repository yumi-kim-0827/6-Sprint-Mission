import { GetItems } from "./GetItems";
import { useEffect, useState } from "react";
import "./App.css";
import Navigator from "./Navigator";
import ItemsAll from "./ItemsAll";
import Controller from "./Controller";

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
    <>
      <Navigator />
      <main className="content-container">
        <article className="products-best">
          <div className="content-label">베스트 상품</div>
        </article>
        <article className="products-all">
          <div className="content-label-box">
            <div className="content-label">전체 상품</div>
            <Controller />
          </div>
          <ItemsAll items={sortedItems} />
        </article>
      </main>
    </>
  );
}

export default App;
