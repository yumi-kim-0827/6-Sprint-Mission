import { useState, useEffect } from "react";
import { getFavoriteData } from "../../apis/apis";
import "../../styles/Items/BestItemsList.css";
import BestItem from "./BestItem.jsx";

const BestItemsList = () => {
  const [data, setData] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(4);

  useEffect(() => {
    (function () {
      if (window.innerWidth < 1199 && window.innerWidth > 768) {
        setDisplayedItems(2);
      } else if (window.innerWidth < 767) {
        setDisplayedItems(1);
      } else {
        setDisplayedItems(4);
      }
    })();

    const loadData = async () => {
      const data = await getFavoriteData();
      setData(data);
    };
    loadData();

    const handleResize = () => {
      if (window.innerWidth < 1199 && window.innerWidth > 768) {
        setDisplayedItems(2);
      } else if (window.innerWidth < 767) {
        setDisplayedItems(1);
      } else {
        setDisplayedItems(4);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bestItemsList">
      <h1 className="bestItemsList__title">베스트 상품</h1>
      <div className="bestItemsList__wrapper">
        {data?.slice(0, displayedItems).map((item) => (
          <BestItem
            key={item.id}
            imgSrc={item.images[0]}
            name={item.name}
            price={item.price}
            favoriteCount={item.favoriteCount}
          />
        ))}
      </div>
    </div>
  );
};

export default BestItemsList;
