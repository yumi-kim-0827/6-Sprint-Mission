import React from 'react';
import { useEffect, useState } from 'react';
import { get_products } from './api';
import ProductElement from './ProductElement';
import IsLoading from "./IsLoading";
import FailLoading from "./FailLoading";


const BestProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [bestProducts, setBestProducts] = useState([]);


  const sortByLikes = (products)=>{
    return products.sort((a, b) => a['favoriteCount'] - a['favoriteCount']);

  }
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
    setBestProducts(sortByLikes(list));
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <div>
        베스트 상품
        {isLoading ? (
          <IsLoading />
        ) : loadingError ? (
          <FailLoading />
        ) : (
          bestProducts.map((product) => {
            return <ProductElement key={product.id} product={product} />;
          })
        )}
      </div>
    </>
  );
};

export default BestProducts;
