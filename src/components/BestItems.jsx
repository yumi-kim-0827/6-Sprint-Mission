import { useEffect, useState } from "react";
import "./BestItems.css";
import { getProducts } from "../api/api";
import ItemElement from "./ItemElement";

function BestItems() {
  const [products, setProducts] = useState([]);

  const handleBestProductLoad = async () => {
    let result;
    result = await getProducts({ orderBy: "favorite", pageSize: 4 });
    setProducts(result.list);
  };

  useEffect(() => {
    handleBestProductLoad();
  }, []);

  return (
    <ul className="bestProduct-area">
      {products.map(item => {
        return <ItemElement key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default BestItems;
