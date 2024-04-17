import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import ListItems from "./ListItems";

function List({ title, order }) {
  const [items, setItems] = useState();
  console.log(order);

  const getItems = async ({ order }) => {
    let result;
    try {
      result = await getProducts({ order });
    } catch (err) {
      console.error(err);
    }
    const { totalCount, list } = await result;
    setItems(list);
  };

  // 데이터 가져오기
  useEffect(() => {
    getItems({ order });
  }, []);

  return (
    <div className="ItemList">
      <h3>{title}</h3>
      <ListItems items={items} />
    </div>
  );
}

export default List;
