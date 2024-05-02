import { useState } from "react";

import AllItems from "../components/AllItems";
import BestItems from "../components/BestItems";
import Header from "../components/Header";
import LoginLink from "../components/LoginLink";
import PaginationProvider from "../contexts/paginationContext";
import "../css/ItemsPage.css";
import { calculatePageSize } from "../module";

function ItemsPage() {
  const [entireItemsPageSize, setEntireItemsPageSize] =
    useState(calculatePageSize());

  const handlePageSize = () => {
    setEntireItemsPageSize(calculatePageSize());
  };

  window.addEventListener("resize", handlePageSize);

  return (
    <>
      <Header>
        <LoginLink />
      </Header>
      <BestItems className="best-items" pageSize={entireItemsPageSize} />
      <PaginationProvider>
        <AllItems className="entire-items" pageSize={entireItemsPageSize} />
      </PaginationProvider>
    </>
  );
}

export default ItemsPage;
