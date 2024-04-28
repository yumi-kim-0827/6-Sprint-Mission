import { useState, useEffect } from "react";
import { getItems } from "../api";
import ItemBox from "./ItemBox";
import "../styles/BestItemBanner.css";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 1;
  } else if (width < 1200) {
    return 2;
  } else {
    return 4;
  }
};


const BestItemBanner = () => {
  const [bestItem, setBestItem] = useState([]);
  const [bestItemSize, setBestItemSize] = useState(getPageSize());

  const handleBestItemBannerLoad = async () => {
    const { list } = await getItems("favorite", 1, bestItemSize);
    setBestItem(list);
  };
  useEffect(() => {
    const handleResize = ()=>{
      setBestItemSize(getPageSize());
    }

    window.addEventListener("resize", handleResize);

    handleBestItemBannerLoad();
    return ()=>{
      window.removeEventListener("resize", handleResize);
    };
  }, [bestItemSize]);
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
