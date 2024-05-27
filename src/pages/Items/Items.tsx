import React from "react";
import BestProducts from "./components/BestProducts";
import OnSaleProducts from "./components/OnSaleProducts";
// import { PaginationBar } from "./components/PaginationBar";

const Items: React.FC = () => {
  return (
    <>
      <BestProducts />
      <OnSaleProducts />
      {/* <PaginationBar /> */}
    </>
  );
};

export default Items;
