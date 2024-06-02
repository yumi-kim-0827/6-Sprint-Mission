import React, { useEffect, useState } from "react";
import getProducts, { PAGE_SIZE } from "../api/products";
import ProductCard from "./ProductCard";
import AllProductsHeader from "./AllProductsHeader";
import styles from "./AllProducts.module.css";
import Pagination from "./Pagination";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("recent");

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts({
        page: page,
        orderBy: order,
        keyword: search,
      });
      setProducts(data.list);
      setTotalPage(Math.ceil(data.totalCount / PAGE_SIZE));
    }

    fetchData();
  }, [page, order, search]);

  return (
    <div>
      <AllProductsHeader
        setOrder={setOrder}
        search={search}
        products={products}
        setSearch={setSearch}
      />
      <div className={styles.products}>
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
      <Pagination totalPage={totalPage} page={page} setPage={setPage} />
    </div>
  );
};

export default AllProducts;
