import { useEffect, useState } from "react";
import styles from "./market.module.scss";
import useDeviceState from "hooks/useDeviceState";
import getPageSize from "utils/getPageSize";
import getProductsData from "apis/getProductsData";
import useResetPage from "hooks/useResetPage";
import { useAtomValue, useSetAtom } from "jotai";
import { orderAtom } from "contexts/atoms/order";
import { currentPageAtom, totalPagesAtom } from "contexts/atoms/page";
import useAsync from "hooks/useAsync";
import { Button } from "components/Button";
import Loading from "components/Loading";
import { Input } from "components/Input";
import Card from "components/Card";

const DEVICE_PRODUCT_COUNT = {
  mobile: 4,
  tablet: 6,
  desktop: 10,
};

export default function AllProducts() {
  const [keyword, setKeyword] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [renderDataList, setRenderDataList] = useState([]);
  const orderState = useAtomValue(orderAtom);
  const currentPage = useAtomValue(currentPageAtom);
  const setTotalPages = useSetAtom(totalPagesAtom);
  const { isLoading, getProductsDataAsync } = useAsync(getProductsData);
  const { deviceState } = useDeviceState();
  useResetPage([deviceState, keyword]);

  // 렌더되는 데이터 설정
  useEffect(() => {
    (async () => {
      const pageSize = getPageSize(deviceState, DEVICE_PRODUCT_COUNT);
      const order = orderState === "최신순" ? "recent" : "favorite";

      const data = await getProductsDataAsync({
        order,
        page: currentPage,
        pageSize,
        keyword,
      });
      setRenderDataList(data.list);
      setTotalCount(data.totalCount);
    })();
  }, [currentPage, deviceState, orderState, keyword]);

  // 전체 페이지 설정
  useEffect(() => {
    const pageSize = getPageSize(deviceState, DEVICE_PRODUCT_COUNT);
    const totalPages = Math.ceil(totalCount / pageSize);
    setTotalPages(totalPages > 0 ? totalPages : 1);
  }, [deviceState, renderDataList]);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className={styles.all__products}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {deviceState === "desktop" ? "전체 상품" : "판매 중인 상품"}
        </h1>
        <div className={styles.button}>
          <Button.Link to="/additem">상품 등록하기</Button.Link>
        </div>
        <div className={styles.searchInput}>
          <Input.Search value={keyword} onChange={handleKeywordChange} />
        </div>
        <div className={styles.selectInput}>
          <Input.Select />
        </div>
      </div>

      {renderDataList.length > 0 ? (
        <div className={styles.cards}>
          {isLoading ? (
            <Loading />
          ) : (
            renderDataList.map((data, idx) => <Card key={idx} data={data} />)
          )}
        </div>
      ) : (
        <h1 className={styles.noItems}>상품이 존재하지 않습니다</h1>
      )}
    </div>
  );
}
