import React from "react";
import ItemCard from "./ItemCard";
import getProducts from "../../../api/getProducts";
import { useEffect, useState } from "react";
import "./BestProducts.css";
import useItemCount from "./useItemCount";
import { Product } from "../../../types";

const BestProducts: React.FC = () => {
  const maxVisibleItems: number = useItemCount();
  const [bestItems, setItems] = useState<Product[]>([]);
  // const [pageSize, setPageSize] = useState(10); 페이지네이션 기능에 사용

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts({
        pageSize: maxVisibleItems,
        orderBy: "favorite",
      });
      setItems(data.list);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container-best-products">
      <h1>베스트 상품</h1>
      <div className="item-cards-container">
        {bestItems.map((item, i) => {
          return <ItemCard key={item.id} best item={item} />;
        })}
      </div>
    </div>
  );
};

export default BestProducts;
