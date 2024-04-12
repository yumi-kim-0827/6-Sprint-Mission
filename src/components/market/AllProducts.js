import React, { useEffect, useState } from "react";
import styles from "styles/markets.module.scss";
import useDeviceState from "features/hooks/layout/useDeviceState";
import Card from "./Card";
import Button from "components/commons/Button";
import { SearchInput, SelectInput } from "components/commons/Inputs";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentPageState, totalPagesState } from "context/atoms/page";
import { itemsOrderState } from "context/atoms/order";
import useDataFetching from "features/hooks/data/useFetchData";
import getProductsPerPage from "features/utils/getProductsPerPage";
import { useDataSorting } from "features/hooks/data/useDataSorting";

const PRODUCTS_URL = "https://panda-market-api.vercel.app/products";

export default function AllProducts() {
  const [renderDatas, setRenderedDatas] = useState([]);
  const order = useRecoilValue(itemsOrderState);
  const currentPage = useRecoilValue(currentPageState);
  const setTotalPages = useSetRecoilState(totalPagesState);
  const deviceState = useDeviceState();
  const [allProductsList] = useDataFetching(PRODUCTS_URL);
  const sortedAllProductsList = useDataSorting(allProductsList, order);

  // 렌더되는 데이터 설정
  useEffect(() => {
    const productsPerPage = getProductsPerPage(deviceState);
    const originalDatas = [...sortedAllProductsList];
    const pageStartIdx = productsPerPage * (currentPage - 1);
    const pageEndIdx = productsPerPage * currentPage - 1;
    setRenderedDatas(originalDatas.slice(pageStartIdx, pageEndIdx + 1));
  }, [currentPage, deviceState, order, sortedAllProductsList]);

  // 전체 페이지 설정
  useEffect(() => {
    const productsPerPage = getProductsPerPage(deviceState);
    const totalPages = Math.ceil(allProductsList.length / productsPerPage);
    setTotalPages(totalPages > 0 ? totalPages : 1);
  }, [deviceState, allProductsList]);

  return (
    <div className={styles.all__products}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {deviceState === "desktop" ? "전체 상품" : "판매 중인 상품"}
        </h1>
        {/* TODO: 클래스 네임 props로 변경 */}
        <div className={styles.button}>
          <Button to="/additem">상품 등록하기</Button>
        </div>
        <div className={styles.searchInput}>
          <SearchInput />
        </div>
        <div className={styles.selectInput}>
          <SelectInput />
        </div>
      </div>

      <div className={styles.cards}>
        {renderDatas.map((data, idx) => (
          <Card key={idx} data={data} />
        ))}
      </div>
    </div>
  );
}
