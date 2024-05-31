import React, { useEffect, useState } from "react";
import styles from "./BestProducts.module.css";
import ProductCard from "./ProductCard";
import getProducts from "../api/products";

const BestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts({
        pageSize: 4,
        orderBy: "favorite",
      });
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <div className={BestProducts}>
      <div className={styles.bestItem}>베스트 상품</div>
      <div className={styles.products_list}>
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
