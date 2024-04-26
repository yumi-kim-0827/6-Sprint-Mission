import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import getItems from "../api/api";

export default function BestProducts() {
  const [data, setData] = useState([]);

  const fetchData = async ({ orderBy }) => {
    const products = await getItems({ orderBy });
    setData(products.list);
  };

  useEffect(() => {
    fetchData({ orderBy: "favorite" });
  }, []);

  return (
    <div className="w-7/12 mt-5 m-auto">
      <h1 className="mb-5 text-xl font-bold ">베스트 상품</h1>
      <div className="flex justify-between">
        {data?.slice(0, 4).map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
