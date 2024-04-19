import React from "react";
import AllItems from "./components/AllItems";
import BestItems from "./components/BestItems";
import "./ItemsPage.css";

function ItemsPage() {
  return (
    <div>
      <BestItems />
      <AllItems />
    </div>
  );
}

export default ItemsPage;
