import React, { useEffect } from "react";
import GNB from "components/layouts/GNB";
import BestProducts from "components/market/BestProducts";
import { SearchInput, SelectInput } from "components/commons/Inputs";
import Pagination from "components/commons/Pagination";
import { MarketLayout } from "components/layouts/Layout";

export default function MarketMainPage() {
  // const getData = async () => {
  //   const response = await fetch(
  //     "https://panda-market-api.vercel.app/products"
  //   );
  //   const data = await response.json();

  //   console.log(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <GNB />
      <MarketLayout>
        <BestProducts />
        {/* <SearchInput />
        <SelectInput />
        <Pagination /> */}
      </MarketLayout>
    </>
  );
}
