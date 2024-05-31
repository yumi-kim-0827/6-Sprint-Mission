import React, { useEffect, useState } from "react";
import getProducts from "../api/products";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts({});
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default AllProducts;
