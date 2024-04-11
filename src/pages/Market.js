import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import ProductItem from "../components/ProductItem/ProductItem";

const Market = () => {
  const [products, setProducts] = useState([]);

  const getItems = async () => {
    const items = await getProducts();
    const { list } = items;
    setProducts(list);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductItem item={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Market;
