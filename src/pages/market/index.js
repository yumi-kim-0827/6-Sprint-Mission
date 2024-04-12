import React, { useEffect, useState } from "react";
import GNB from "components/layouts/GNB";
import BestProducts from "components/market/BestProducts";
import Pagination from "components/commons/Pagination";
import { MarketLayout } from "components/layouts/Layout";
import AllProducts from "components/market/AllProducts";

export default function MarketMainPage() {
  return (
    <>
      <GNB />
      <MarketLayout>
        <BestProducts />
        <AllProducts />
        <Pagination />
      </MarketLayout>
    </>
  );
}
