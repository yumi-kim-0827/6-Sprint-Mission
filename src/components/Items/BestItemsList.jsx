import { useState, useEffect } from "react";
import { getFavoriteData } from "../../apis/apis";
import "../../styles/Items/BestItemsList.css";
import BestItem from "./BestItem.jsx";

const BestItemsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getFavoriteData();
      setData(data);
    };
    loadData();
  }, []);

  return (
    <div className={"BestItemsList"}>
      <h1 className={"BestItemsList__title"}>베스트 상품</h1>
      <div className={"BestItemsList__wrapper"}>
        {data?.map((item) => (
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
