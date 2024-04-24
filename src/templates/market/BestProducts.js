import { useEffect, useState } from "react";
import styles from "./market.module.scss";
import useDeviceState from "hooks/useDeviceState";
import getPageSize from "utils/getPageSize";
import getProductsData from "apis/getProductsData";
import Loading from "components/Loading";
import useAsync from "hooks/useAsync";
import Card from "components/Card";

const DEVICE_PRODUCT_COUNT = {
  mobile: 1,
  tablet: 2,
  desktop: 4,
};

export default function BestProducts() {
  const { deviceState } = useDeviceState();
  const [renderDataList, setRenderDataList] = useState([]);
  const { isLoading, getProductsDataAsync } = useAsync(getProductsData);

  useEffect(() => {
    (async () => {
      const pageSize = getPageSize(deviceState, DEVICE_PRODUCT_COUNT);

      const data = await getProductsDataAsync({
        order: "favorite",
        page: 1,
        pageSize,
      });
      setRenderDataList(data.list);
    })();
  }, [deviceState]);

  return (
    <div className={styles.best__products}>
      <h1 className={styles.header__title}>베스트 상품</h1>

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
