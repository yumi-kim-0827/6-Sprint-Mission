import React from "react";
import BestProducts from "../component/BestProducts";
import Products from "../component/Products";
import "../css/itemPage.css";
import useSetNumOfItemsToShow from "../hooks/setNumOfItemsToShow";

const ItemPage = () => {
  const [bestProductsNumOfItemsToShow, ProductsNumOfItemsToShow] =
    useSetNumOfItemsToShow({ bestProducts: [1, 2, 4], Products: [4, 6, 10] });

  return (
    <main className="itemPage-main">
      <div className="itemPage-main-content">
        <BestProducts numOfItemsToShow={bestProductsNumOfItemsToShow} />
        <Products numOfItemsToShow={ProductsNumOfItemsToShow} />
      </div>
    </main>
  );
};

export default ItemPage;
