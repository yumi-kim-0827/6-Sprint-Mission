import { useState, useEffect } from "react";
import { getItems } from "../api";
import ItemBox from "./ItemBox";
import "../styles/BestItemBanner.css";

const BestItemBanner = () => {
  const [bestItem, setBestItem] = useState([]);
  const [bestItemSize, setBestItemSize] = useState(4);

  const handleBestItemBannerLoad = async () => {
    const { list } = await getItems("favorite", 1, bestItemSize);
    setBestItem(list);
  };
  useEffect(() => {
    handleBestItemBannerLoad();
  }, []);
  return (
    <section className="best-container">
      <div className="best-header">
        <h3>베스트 상품</h3>
        <p></p>
      </div>
      <div className="best-item-list">
        {bestItem.map((item) => {
          return <ItemBox key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default BestItemBanner;
