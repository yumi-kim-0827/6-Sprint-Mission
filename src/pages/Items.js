import React from "react";
import styles from "./Items.module.css";
import BestProducts from "../components/BestProducts";
import AllProducts from "../components/AllProducts";

const Items = () => {
  return (
    <div>
      <BestProducts />
      <AllProducts />
    </div>
  );
};

export default Items;
