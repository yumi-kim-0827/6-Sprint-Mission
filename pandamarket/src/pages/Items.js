import React, { useEffect, useState } from "react";
import styles from "../styles/items.module.css";
import ProductList from "../components/ProductList";
import BestProductList from "../components/BestProductList"
import { getProducts, getBestProducts } from "../api";

function Items() {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [order, setOrder] = useState("createdAt");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const fetchedProducts = await getProducts({ order });
        setProducts(fetchedProducts);

        const bestProducts = await getBestProducts();
        setBestProducts(bestProducts)
      } catch (error) {
        console.error("상품 가져오는데 실패했습니다", error);
        setIsLoading(false);
      }
    };
    fetch();
  }, [order]);

  const sortedProducts = products.sort((a, b) => b[order] - a[order]);

  const handleOrderChange = (orderChange) => {
    setOrder(orderChange);
  };

  return (
    <div className={styles.container}>
      <div className={styles["best-products"]}>
        <h3>베스트 상품</h3>
        <BestProductList products={bestProducts} />
      </div>

      <div>
        <div className={styles["all-products-nav"]}>
          <h3>전체 상품</h3>
          <div className={styles.search}>
            <input placeholder="검색할 상품을 입력해주세요"></input>
          </div>
          <button id="btn_small">상품 등록하기</button>
          <div className={styles.dropdown}>
            <select
              value={order}
              onChange={(e) => handleOrderChange(e.target.value)}
            >
              <option value="createdAt">최신순</option>
              <option value="favoriteCount">좋아요순</option>
            </select>
          </div>
        </div>

        <ProductList products={sortedProducts} />
      </div>
    </div>
  );
}

export default Items;
