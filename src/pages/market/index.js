import React, { useEffect, useState } from "react";
import GNB from "components/layouts/GNB";
import BestProducts from "components/market/BestProducts";
import Pagination from "components/commons/Pagination";
import { MarketLayout } from "components/layouts/Layout";
import AllProducts from "components/market/AllProducts";
import { itemsOrderState } from "context/atoms/order";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import useDeviceState from "features/hooks/useDeviceState";
import { currentPageState, totalPagesState } from "context/atoms/page";

export default function MarketMainPage() {
  const [allProductsData, setAllProductsData] = useState([]);
  const [renderedData, setRenderedData] = useState([]);
  const order = useRecoilValue(itemsOrderState);
  const setTotalPages = useSetRecoilState(totalPagesState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const deviceState = useDeviceState();

  const getData = async () => {
    const response = await fetch(
      "https://panda-market-api.vercel.app/products"
    );
    const data = await response.json();
    setAllProductsData(data.list);
  };

  const getProductsPerPage = () => {
    if (deviceState === "mobile") return 4;
    if (deviceState === "tablet") return 6;
    if (deviceState === "desktop") return 10;
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
    const productsPerPage = getProductsPerPage();
    const originalDatas = [...allProductsData];
    const pageStartIdx = productsPerPage * (currentPage - 1);
    const pageEndIdx = productsPerPage * currentPage - 1;
    setRenderedData(originalDatas.slice(pageStartIdx, pageEndIdx + 1));
  }, [currentPage, deviceState, order, allProductsData]);

  useEffect(() => {
    const productsPerPage = getProductsPerPage();
    const totalPages = Math.ceil(allProductsData.length / productsPerPage);
    setTotalPages(totalPages > 0 ? totalPages : 1);
  }, [deviceState]);

  useEffect(() => {
    setCurrentPage(1);
  }, [deviceState]);

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
