import "./ProductBest.css";

import React from "react";
import { useState, useEffect } from "react";

import { getProducts } from "../../../api/product.api";
import { Desktop, Mobile, Tablet } from "../../MediaQuery";
import Product from "./Product";

interface ProductType {
  id: string;
  images: string;
  name: string;
  price: number;
  favoriteCount: number;
}

interface GetProductsResponse {
  list: ProductType[];
}

interface GetProductsQuery {
  orderBy: string;
  page: number;
  pageSize: number;
}

const ProductBest: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleLoad = async (query: GetProductsQuery) => {
    const { list }: GetProductsResponse = await getProducts(query);
    setProducts(list);
  };

  useEffect(() => {
    handleLoad({ orderBy: "favorite", page: 1, pageSize: 4 });
  }, []);

  return (
    <>
      <span className="best_title">베스트 상품</span>
      <div className="best_content">
        <Desktop>
          {products.slice(0, 4).map((product) => (
            <Product product={product} key={product.id} isAllSection={false} />
          ))}
        </Desktop>
        <Tablet>
          {products.slice(0, 2).map((product) => (
            <Product product={product} key={product.id} isAllSection={false} />
          ))}
        </Tablet>
        <Mobile>
          {products.slice(0, 1).map((product) => (
            <Product product={product} key={product.id} isAllSection={false} />
          ))}
        </Mobile>
      </div>
    </>
  );
};

export default ProductBest;
