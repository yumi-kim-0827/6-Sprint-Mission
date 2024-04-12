/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import styles from "../styles/items.module.css";
import ProductList from "../components/ProductList";
import BestProductList from "../components/BestProductList";
import { getProducts, getBestProducts } from "../api";
import { useNavigate } from "react-router-dom";
import Pagenation from "../components/Pagenation";

function Items() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [keyword, setKeyword] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  // 처음과 끝 인덱스 번호를 구하고 slice로 분할하기
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;

  const currentProducts = (products) => {
    let currentProducts = 0;
    currentProducts = products.slice(indexOfFirst, indexOfLast);
    return currentProducts;
  };

  const navigate = useNavigate();
  const goToAddItem = () => {
    navigate("/additem");
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const fetchedProducts = await getProducts({ order, keyword });
        setProducts(fetchedProducts);

        const bestProducts = await getBestProducts();
        setBestProducts(bestProducts);
      } catch (error) {
        console.error("상품 가져오는데 실패했습니다", error);
        setIsLoading(false);
      }
    };
    fetch();
  }, [order, keyword]);

  const sortedProducts = products.sort((a, b) => b[order] - a[order]);

  const handleOrderChange = (orderChange) => {
    setOrder(orderChange);
  };

  const handleKeywordSearch = (e) => {
    setKeyword(e.target.value);
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
          <div className={styles["all-products-sub-nav"]}>
            <div className={styles.search}>
              <img src="/assets/icon_search.png" />
              <input
                placeholder="검색할 상품을 입력해주세요"
                onChange={handleKeywordSearch}
              ></input>
            </div>
            <button id="btn_small" onClick={goToAddItem}>
              상품 등록하기
            </button>
            <div>
              <select
                className={styles.dropdown}
                value={order}
                onChange={(e) => handleOrderChange(e.target.value)}
              >
                <option value="createdAt">최신순</option>
                <option value="favoriteCount">좋아요순</option>
              </select>
            </div>
          </div>
        </div>

        <ProductList products={currentProducts(sortedProducts)} />
      </div>
      <Pagenation productsPerPage={productsPerPage} totalProducts={products.length} paginate={setCurrentPage} />
    </div>
  );
}

export default Items;
