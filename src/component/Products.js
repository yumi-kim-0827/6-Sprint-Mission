import React from "react";
import { useEffect, useState } from "react";
import { get_products } from "./api";
import ProductElement from "./ProductElement";
import IsLoading from "./IsLoading";
import FailLoading from "./FailLoading";

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
    <>
      <div>
        전체상품
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
    </>
  );
};

export default Products;
