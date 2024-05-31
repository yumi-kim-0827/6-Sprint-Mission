import React, { useEffect, useState } from "react";
import getProducts from "../api/products";
import ProductCard from "./ProductCard";
import AllProductsHeader from "./AllProductsHeader";
import styles from "./AllProducts.module.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return products;
    }
    return products.filter((item) => {
      item.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filteredProducts = getFilteredData();

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts({});
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <AllProductsHeader
        search={search}
        products={products}
        onChange={onChange}
      />
      <div className={styles.products}>
        {filteredProducts.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
