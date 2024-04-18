import { GetItems } from "./GetItems";
import { GetBestItems } from "./GetItems";
import { useEffect, useState } from "react";
import "./App.css";
import Navigator from "./Navigator";
import ItemsAll from "./ItemsAll";
import Controller from "./Controller";
import ItemsBest from "./ItemsBest";

function App() {
  const [order, setOrder] = useState("createdAt");
  const [orderQuery, setOrderQuery] = useState("recent");
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);

  const sortedBestItems = bestItems.sort(
    (a, b) => b[`favoriteCount`] - a[`favoriteCount`]
  );
  const sortedItems = items.sort((a, b) => a[order] - b[order]);

  const handleLatestClick = () => {
    setOrder("createdAt");
    setOrderQuery("recent");
  };
  const handleMostFavClick = () => {
    setOrder("favoriteCount");
    setOrderQuery("favorite");
  };

  const handleLoad = async (orderQueryName) => {
    const { list } = await GetItems(orderQueryName);
    setItems(list);
  };

  const handleLoadBest = async () => {
    const { list } = await GetBestItems();
    setBestItems(list);
  };

  useEffect(() => {
    handleLoad(orderQuery);
  }, [orderQuery]);

  useEffect(() => {
    handleLoadBest();
  }, []);
  return (
    <>
      <Navigator />
      <main className="content-container">
        <button onClick={handleLatestClick}>최신순</button>
        <button onClick={handleMostFavClick}>인기순</button>
        <article className="products-best">
          <div className="content-label">베스트 상품</div>
          <ItemsBest items={sortedBestItems} />
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
