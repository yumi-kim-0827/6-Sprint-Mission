import React from "react";
import ItemsAllSection from "./components/ItemsAllSection";
import ItemsBestSection from "./components/ItemsBestSection";
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
