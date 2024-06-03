import ItemCard from "./ItemCard";
import { getProducts } from "../../../api/itemApi";
import { useState, useEffect } from "react";

const BestItemSection = () => {
  const [itemList, setItemList] = useState([]);

  return (
    <div>
      <h1>베스트 상품</h1>
      <div>
        {itemList.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default BestItemSection;
