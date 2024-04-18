import { GetItems } from "./GetItems";
import { GetBestItems } from "./GetItems";
import { useEffect, useState } from "react";
import "./App.css";
import Navigator from "./Navigator";
import ItemsAll from "./ItemsAll";
import Controller from "./Controller";
import ItemsBest from "./ItemsBest";

function App() {
  const [order, setOrder] = useState("recent");
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);

  const handleLatestClick = () => {
    setOrder("recent");
  };
  const handleMostFavClick = () => {
    setOrder("favorite");
  };

  const handleLoad = async (orderQuery) => {
    const { list } = await GetItems(orderQuery);
    setItems(list);
  };

  const handleLoadBest = async () => {
    const { list } = await GetBestItems();
    setBestItems(list);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

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
          <ItemsBest items={bestItems} />
        </article>
        <article className="products-all">
          <div className="content-label-box">
            <div className="content-label">전체 상품</div>
            <Controller />
          </div>
          <ItemsAll items={items} />
        </article>
      </main>
    </>
  );
}

export default App;
