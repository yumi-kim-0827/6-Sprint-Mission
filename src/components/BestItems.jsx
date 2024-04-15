import BestItem from "./BestItem";
import "../styles/BestItems.css";
import { useState, useEffect } from "react";
import { getItems } from "../api/api";

function BestItems() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const resData = await getItems();
      setData(resData.list);
    };
    loadData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1 className="best-items-title">베스트 상품</h1>
      {data.map((item) => (
        <BestItem key={item.id} items={item} />
      ))}
    </div>
  );
}

export default BestItems;
