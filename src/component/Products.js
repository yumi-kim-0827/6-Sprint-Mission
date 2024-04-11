import React from "react";
import { useEffect, useState } from "react";
import { get_products } from "./api";
import ProductElement from "./ProductElement";
import IsLoading from "./IsLoading";
import FailLoading from "./FailLoading";
import "../css/products.css"

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [products, setProducts] = useState([]);

  const handleLoad = async () => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await get_products();
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { list, totalCount } = result;
    setProducts(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="products-section">
      <div className="product-title">전체상품</div>
      <div className="products-content">
        {isLoading ? (
          <IsLoading />
        ) : loadingError ? (
          <FailLoading />
        ) : (
          products.map((product) => {
            return <ProductElement key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Products;
