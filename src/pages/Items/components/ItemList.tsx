import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import useItemCount from "./useItemCount";
import getProducts from "../../../api/getProducts";
import { Product } from "../../../types";

const ItemList: React.FC = () => {
  const maxVisibleItems = useItemCount();
  const [items, setItems] = useState<Product[]>();
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
      {items?.map((item, i) => {
        if (maxVisibleItems === 4) {
          return i >= maxVisibleItems ? null : (
            <ItemCard key={item.id} item={item} />
          );
        } else if (maxVisibleItems === 6) {
          return i >= maxVisibleItems ? null : (
            <ItemCard key={item.id} item={item} />
          );
        } else {
          return i >= maxVisibleItems ? null : (
            <ItemCard key={item.id} desktop item={item} />
          );
        }
      })}
    </div>
  );
};

export default ItemList;
