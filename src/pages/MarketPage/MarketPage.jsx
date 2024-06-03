import React from "react";
import BestItemsSection from "./components/BestItemSection";
import AllItemsSection from "./components/AllItemsSection";
import "./MarketPage.css";

const MarketPage = () => {
  return (
    <div>
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
};

export default MarketPage;
