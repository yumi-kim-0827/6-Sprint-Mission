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

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return products;
    }
    return products.filter((item) => {
      // includes 인수로 전달한 값이 호출한 프로퍼티에 포함된지 찾아서 있으면 true 없으면 false (item.name)
      item.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filteredProducts = getFilteredData();

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts({ page: page, orderBy: order });
      setProducts(data.list);
      setTotalPage(Math.ceil(data.totalCount / PAGE_SIZE));
    }

    fetchData();
  }, [page, order]);

  return (
    <div>
      <AllProductsHeader
        setOrder={setOrder}
        search={search}
        products={products}
        onChange={onChange}
      />
      <div className={styles.products}>
        {filteredProducts.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
      <Pagination totalPage={totalPage} page={page} setPage={setPage} />
    </div>
  );
};

export default AllProducts;
