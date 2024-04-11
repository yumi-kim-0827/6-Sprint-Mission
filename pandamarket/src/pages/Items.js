import React, { useEffect, useState } from "react";
import styles from "../styles/items.module.css";
import ProductList from "../components/ProductList";
import { getProducts } from "../api";

function Items() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("createdAt");

  const [isLoading, setIsLoading] = useState(false);

  const handleNewestClick = () => setOrder("createdAt");
  const handleFavoriteClick = () => setOrder("favoriteCount");

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const fetchedProducts = await getProducts({ order });
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetch();
  }, [order]);

  const sortedProducts = products.sort((a, b) => b[order] - a[order]);

  return (
    <div className={styles.container}>
      <div className={styles["best-products"]}>
        <h3>베스트 상품</h3>
        <div className=""></div>
      </div>

      <div className={styles["all-products"]}>
        <h3>전체 상품</h3>
        <div className="">
          <ProductList products={sortedProducts} />
        </div>
      </div>
    </div>
  );
}

export default Items;
