import ItemCard from "../ItemCard";
import { getProducts } from "../../api/itemsApi";
import { useEffect, useState } from "react";

export default function BestSection() {
  const [itemList, setItemList] = useState([]);
  // const fetchSortedData = async ({ orderBy }) => {
  //   const products = await getProducts({ orderBy });
  // };

  // useEffect(() => {
  //   fetchSortedData({ orderBy: "favorite" });
  // }, []);

  return (
    <div className="">
      <h1>베스트 상품</h1>
      <div className="">
        {/* {itemList?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))} */}
      </div>
    </div>
  );
}
