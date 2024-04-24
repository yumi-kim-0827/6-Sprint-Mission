import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import useItemCount from "./useItemCount";
import getProducts from "../../../api/getProducts";

export const ItemList = () => {
  const maxVisibleItems = useItemCount();
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts({ pageSize });
      setItems(data.list);
    };

    fetchProducts();
  }, []);

  return (
    <div className="cards-container">
      {items.map((item, i) => {
        if (maxVisibleItems === 4) {
          return i >= maxVisibleItems ? null : (
            <ItemCard key={item.id} mobile item={item} />
          );
        } else if (maxVisibleItems === 6) {
          return i >= maxVisibleItems ? null : (
            <ItemCard key={item.id} tablet item={item} />
          );
        } else {
          return i >= maxVisibleItems ? null : (
            <ItemCard key={item.id} pc item={item} />
          );
        }
      })}
    </div>
  );
};
