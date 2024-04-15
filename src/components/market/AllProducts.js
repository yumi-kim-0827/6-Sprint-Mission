import React, { useEffect, useState } from "react";
import styles from "styles/markets.module.scss";
import useDeviceState from "features/hooks/useDeviceState";
import Card from "./Card";
import Button from "components/commons/Button";
import { SearchInput, SelectInput } from "components/commons/Inputs";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentPageState, totalPagesState } from "context/atoms/page";
import { itemsOrderState } from "context/atoms/order";
import getProductsPerPage from "features/utils/getProductsPerPage";
import getProductsData from "apis/getProductsData";
import useResetPage from "features/hooks/useResetPage";

export default function AllProducts() {
  const [keyword, setKeyword] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [renderDataList, setRenderedDataList] = useState([]);
  const orderState = useRecoilValue(itemsOrderState);
  const currentPage = useRecoilValue(currentPageState);
  const setTotalPages = useSetRecoilState(totalPagesState);
  const deviceState = useDeviceState();
  useResetPage([deviceState, keyword]);

  // 렌더되는 데이터 설정
  useEffect(() => {
    (async () => {
      const productsPerPage = getProductsPerPage(deviceState);
      const order = orderState === "최신순" ? "recent" : "favorite";

      const data = await getProductsData({
        order,
        page: currentPage,
        pageSize: productsPerPage,
        keyword,
      });
      setRenderedDataList(data.list);
      setTotalCount(data.totalCount);
    })();
  }, [currentPage, deviceState, orderState, keyword]);

  // 전체 페이지 설정
  useEffect(() => {
    const productsPerPage = getProductsPerPage(deviceState);
    const totalPages = Math.ceil(totalCount / productsPerPage);
    setTotalPages(totalPages > 0 ? totalPages : 1);
  }, [deviceState, renderDataList]);

  return (
    <div className={styles.all__products}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {deviceState === "desktop" ? "전체 상품" : "판매 중인 상품"}
        </h1>
        <div className={styles.button}>
          <Button to="/additem">상품 등록하기</Button>
        </div>
        <div className={styles.searchInput}>
          <SearchInput keyword={keyword} setKeyword={setKeyword} />
        </div>
        <div className={styles.selectInput}>
          <SelectInput />
        </div>
      </div>

      {renderDataList.length > 0 ? (
        <div className={styles.cards}>
          {renderDataList.map((data, idx) => (
            <Card key={idx} data={data} />
          ))}
        </div>
      ) : (
        <h1 className={styles.noItems}>상품이 존재하지 않습니다</h1>
      )}
    </div>
  );
}
