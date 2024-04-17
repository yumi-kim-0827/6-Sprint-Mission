import React, { useEffect, useState } from "react";
import GNB from "components/layouts/GNB";
import BestProducts from "components/market/BestProducts";
import Pagination from "components/commons/Pagination";
import { MainLayout } from "components/layouts/Layout";
import AllProducts from "components/market/AllProducts";

export default function MarketMainPage() {
  return (
    <>
      <GNB />
      <MainLayout>
        <BestProducts />
        <AllProducts />
        <Pagination />
      </MainLayout>
    </>
  );
}
