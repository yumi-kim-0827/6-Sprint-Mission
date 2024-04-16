import React from "react";
import BestProducts from "./component/BestProducts";
import Products from "./component/Products";
import "./css/itemPage.css";

const ItemPage = () => {
  return (
    <>
      
      <main>
        <div className="main-content">
          <BestProducts />
          <Products />
        </div>
      </main>
    </>
  );
};

export default ItemPage;
