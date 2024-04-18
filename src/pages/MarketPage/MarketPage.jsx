import React from "react";
import BestItemsSection from "./BestItemsSection";
import AllItemSection from "./AllItemsSection";
import "./MarketPage.css";

function MarketPage() {
  return (
    <div className="wrapper">
      <BestItemsSection />
      <AllItemSection />
    </div>
  );
}

export default MarketPage;
