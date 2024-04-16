import React, { useEffect, useState } from "react";
import { get_products } from "../api/api";
import ProductElement from "./ProductElement";
import IsLoading from "./IsLoading";
import FailLoading from "./FailLoading";
import "../css/bestProducts.css";

const BestProducts = ({numOfItemsToShow}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [bestProducts, setBestProducts] = useState([]);
  const showedBestProducts = bestProducts.slice(0, numOfItemsToShow);

  const handleLoad = async () => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await get_products({ orderBy: "favorite", pageSize: 4 });
      const { list } = result;
      setBestProducts(list);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoad();
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
          showedBestProducts.map((product) => (
            <ProductElement key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default BestProducts;
