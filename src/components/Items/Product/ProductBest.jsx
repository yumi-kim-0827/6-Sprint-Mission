import "./ProductBest.css";

import { useState, useEffect } from "react";

import { getProducts } from "../../../api/product.api";
import { Desktop, Mobile, Tablet } from "../../MediaQuery";
import Product from "./Product";

const ProductBest = () => {
  const [products, setProducts] = useState([]);

  const handleLoad = async (query) => {
    const { list } = await getProducts(query);
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
            <Product product={product} key={product.id} />
          ))}
        </Desktop>
        <Tablet>
          {products.slice(0, 2).map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Tablet>
        <Mobile>
          {products.slice(0, 1).map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Mobile>
      </div>
    </>
  );
};

export default ProductBest;
