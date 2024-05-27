import Product from "../components/Items/Product/ProductList";
import ProductFooter from "../components/Items/Product/ProductFooter";

import React from "react";
const Items = () => {
  return (
    <>
      <main className="items_container">
        <Product />
      </main>
      <ProductFooter />
    </>
  );
};

export default Items;
