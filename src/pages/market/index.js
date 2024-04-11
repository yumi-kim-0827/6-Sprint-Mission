import React, { useEffect, useState } from "react";
import GNB from "components/layouts/GNB";
import BestProducts from "components/market/BestProducts";
import Pagination from "components/commons/Pagination";
import { MarketLayout } from "components/layouts/Layout";
import AllProducts from "components/market/AllProducts";
import { itemsOrderState } from "context/atoms/order";
import { useRecoilValue } from "recoil";
import useDeviceState from "features/hooks/useDeviceState";
import { currentPageState } from "context/atoms/page";

export default function MarketMainPage() {
  const [allProductsData, setAllProductsData] = useState([]);
  const [renderedData, setRenderedData] = useState([]);
  const order = useRecoilValue(itemsOrderState);
  const deviceState = useDeviceState();
  const currentPage = useRecoilValue(currentPageState);

  const getData = async () => {
    const response = await fetch(
      "https://panda-market-api.vercel.app/products"
    );
    const data = await response.json();
    setAllProductsData(data.list);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (order === "최신순") {
      setAllProductsData((prev) => [
        ...prev.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      ]);
    }
    if (order === "좋아요순") {
      setAllProductsData((prev) => [
        ...prev.sort((a, b) => b.favoriteCount - a.favoriteCount),
      ]);
    }
  }, [order]);

  useEffect(() => {
    let productsPerPage;
    if (deviceState === "mobile") productsPerPage = 4;
    if (deviceState === "tablet") productsPerPage = 6;
    if (deviceState === "desktop") productsPerPage = 10;

    const originalDatas = [...allProductsData];
    const pageStartIdx = productsPerPage * (currentPage - 1);
    const pageEndIdx = productsPerPage * currentPage - 1;
    setRenderedData(originalDatas.slice(pageStartIdx, pageEndIdx + 1));
  }, [currentPage, deviceState, order, allProductsData]);

  return (
    <>
      <GNB />
      <MarketLayout>
        <BestProducts />
        <AllProducts data={renderedData} />
        <Pagination />
      </MarketLayout>
    </>
  );
}
