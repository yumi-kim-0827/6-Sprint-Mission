/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import styles from "../styles/items.module.css";
import { BestProductList, ProductList, Pagination } from "../components";
import { getProducts, getBestProducts } from "../api/api";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

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

  const handleOrderChange = (selectedOption) => {
    setOrder(selectedOption.value);
  };

  const handleKeywordSearch = (e) => {
    setKeyword(e.target.value);
  };

  const selectOptions = [
    { value: "createdAt", label: "최신순" },
    { value: "favoriteCount", label: "좋아요순" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
      padding: "0 1rem",
      height: "56px",
    }),
    option: (provided) => ({
      ...provided,
      padding: "1rem",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }),
  };

  const customComponents = {
    IndicatorSeparator: () => null, // 화살표 구분선 숨기기
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
              {/* <select
                className={styles.dropdown}
                value={order}
                onChange={(e) => handleOrderChange(e.target.value)}
              >
                <div value="createdAt" className={styles.customOption}>최신순</div>
                <div value="favoriteCount" className={styles.customOption}>좋아요순</div>
              </select>
               */}
              <div className={styles.dropdown}>
                <Select
                  styles={customStyles}
                  components={customComponents}
                  options={selectOptions}
                  value={selectOptions.find((option) => option.value === order)}
                  onChange={handleOrderChange}
                />
              </div>
            </div>
          </div>
        </div>

        <ProductList products={currentProducts(sortedProducts)} />
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={setCurrentPage}
      />
    </div>
  );
}

export default Items;
