import ItemCard from "./ItemCard";
import getProducts from "../../../api/getProducts";
import { useEffect, useState } from "react";
import "./BestProducts.css";
import useItemCount from "./useItemCount";

export default function BestProducts() {
  const maxVisibleItems = useItemCount();
  const [bestItems, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts({
        pageSize: maxVisibleItems,
        orderBy: "favorite",
      });
      setItems(data.list);
    };
    console.log("maxVisibleItems", maxVisibleItems);
    fetchProducts();
  }, []);

  // const bestItems = items
  //   ?.sort((a, b) => b.favoriteCount - a.favoriteCount)
  //   .filter((item, index) => index < 4);

  return (
    <div className="container-best-products">
      <h1>베스트 상품</h1>
      <div className="item-cards-container">
        {/* {bestItems?.map((item, i) => {
          return maxVisibleItems === 4 && i === 0 ? (
            <ItemCard key={item.id} best mb item={item} />
          ) : maxVisibleItems === 6 && i < 2 ? (
            <ItemCard key={item.id} best tb item={item} />
          ) : maxVisibleItems === 10 ? (
            <ItemCard key={item.id} best pc item={item} />
          ) : null;
        })} */}
        {bestItems.map((item, i) => {
          return <ItemCard key={item.id} best mb item={item} />;
        })}
      </div>
    </div>
  );
}
