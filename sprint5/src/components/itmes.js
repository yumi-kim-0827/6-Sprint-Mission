import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductMenu from "./ProductMenu";
import Products from "./Products";
import { getProducts } from "./Api";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { list } = await getProducts();
      setItems(list);
    } catch (error) {
      console.error("상품을 불러오는 중 에러 발생:", error);
      setItems([error]);
    }
  };
  return (
    <div>
      <Navbar />
      <ProductMenu title={"베스트 상품"} />
      <Products items={items} />
      <ProductMenu title={"전체 상품"} button />
    </div>
  );
}

export default Items;
