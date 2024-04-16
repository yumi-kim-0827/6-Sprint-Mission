import React, { useEffect, useState } from "react";
import { get_products } from "../api/api";
import ProductElement from "./ProductElement";
import IsLoading from "./IsLoading";
import FailLoading from "./FailLoading";
import "../css/bestProducts.css";

const BestProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [bestProducts, setBestProducts] = useState([]);
  const [numOfItemsToShow, setNumOfItemsToShow] = useState(4);
  const showedBestProducts = bestProducts.slice(0, numOfItemsToShow);

  const handleLoad = async () => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await get_products({ orderBy: 'favorite', pageSize:4 });
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { list } = result;
    setBestProducts(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumOfItemsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setNumOfItemsToShow(2);
      } else {
        setNumOfItemsToShow(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="best-products-section">
      <div className="best-product-title">베스트 상품</div>
      <div className="best-products-content">
        {isLoading ? (
          <IsLoading />
        ) : loadingError ? (
          <FailLoading />
        ) : (
          showedBestProducts.map((product) => {
            return <ProductElement key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default BestProducts;
