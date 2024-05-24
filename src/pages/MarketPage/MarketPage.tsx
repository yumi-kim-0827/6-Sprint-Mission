import React from "react";
import ItemsAllSection from "./comp/ItemsAllSection";
import ItemsBestSection from "./comp/ItemsBestSection";
import "./MarketPage.css";

function MarketPage() {
  return (
    <main>
      <ItemsBestSection />
      <ItemsAllSection />
    </main>
  );
}

export default MarketPage;
