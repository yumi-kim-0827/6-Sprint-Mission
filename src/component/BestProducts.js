import React, { useEffect, useState } from "react";
import ProductElement from "./ProductElement";
import IsLoading from "./IsLoading";
import FailLoading from "./FailLoading";
import "../css/bestProducts.css";
import useLoading from "../api/hooks/loading";

const BestProducts = ({ numOfItemsToShow }) => {
  const [bestProducts, setBestProducts] = useState([]);
  const showedBestProducts = bestProducts.slice(0, numOfItemsToShow);
  const [isLoading, loadingError, handleLoad] = useLoading();

  const handleBestProductsLoad = async () => {
    const result = await handleLoad({ orderBy: "favorite", pageSize: 4 });
    console.log(result);
    setBestProducts(result.list);
  };

  useEffect(() => {
    handleBestProductsLoad();
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
