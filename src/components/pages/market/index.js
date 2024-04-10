import React, { useEffect } from "react";
import GNB from "../../organisms/GNB";
import BestProducts from "../../templates/BestProducts";

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
    </>
  );
}
