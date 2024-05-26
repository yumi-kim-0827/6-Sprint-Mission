import React, { useEffect, useState } from "react";
import ProductElement from "../component/ProductElement";
import "./bestProducts.css";
import { useProductsLoading } from "hooks/useProductsLoading";
import LoadingMessage from "component/LoadingMessage";

interface Product {
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

const BestProducts = ({ numOfItemsToShow }: { numOfItemsToShow: number }) => {
  const [bestProducts, setBestProducts] = useState<Product[]>([]);
  const showedBestProducts = bestProducts.slice(0, numOfItemsToShow);
  const [isLoading, loadingError, noResult, handleLoad] = useProductsLoading();
  const loadingMessage = isLoading || loadingError || noResult;

  const handleBestProductsLoad = async () => {
    const result = await handleLoad({ orderBy: "favorite", pageSize: 4 });
    if (result) {
      setBestProducts(result.list);
    }
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
          />
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
