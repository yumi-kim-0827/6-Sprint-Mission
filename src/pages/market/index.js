import React, { useEffect } from "react";
import GNB from "components/layouts/GNB";
import BestProducts from "components/items/BestProducts";
import { SearchInput, SelectInput } from "components/commons/Inputs";
import Pagination from "components/commons/Pagination";

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

      <BestProducts />
      <SearchInput />
      <SelectInput />
      <Pagination />
    </>
  );
}
