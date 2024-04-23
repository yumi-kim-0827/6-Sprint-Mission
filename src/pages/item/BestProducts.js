import React, { useEffect, useState } from "react";
import ProductElement from "./ProductElement";
import "./bestProducts.css";
import useLoading from "../../hooks/loading";
import LoadingMessage from "../../component/LoadingMessage";

const BestProducts = ({ numOfItemsToShow }) => {
  const [bestProducts, setBestProducts] = useState([]);
  const showedBestProducts = bestProducts.slice(0, numOfItemsToShow);
  const [isLoading, loadingError, noResult, handleLoad] = useLoading();
  const loadingMessage = isLoading || loadingError || noResult;

  const handleBestProductsLoad = async () => {
    const result = await handleLoad({ orderBy: "favorite", pageSize: 4 });
    setBestProducts(result.list);
  };

  useEffect(() => {
    handleBestProductsLoad();
  }, []);

  return (
    <div className="best-products-section">
      <div className="best-product-title">베스트 상품</div>
      <div className="best-products-content">
        {loadingMessage ? (
          <LoadingMessage
            isLoading={isLoading}
            loadingError={loadingError}
            noResult={noResult}
          /> //삼항 연사자 빼고 이렇게 작성해봤는데 어떤가요?
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
