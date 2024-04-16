import React, { useEffect, useState } from "react";
import Card from "components/market/Card";
import styles from "styles/markets.module.scss";
import useDeviceState from "hooks/useDeviceState";
import getPageSize from "utils/getPageSize";
import getProductsData from "apis/getProductsData";

const PAGE_SIZE_ARRAY = [1, 2, 4];

export default function BestProducts() {
  const deviceState = useDeviceState();
  const [renderDataList, setRenderDataList] = useState([]);

  useEffect(() => {
    (async () => {
      const pageSize = getPageSize(deviceState, PAGE_SIZE_ARRAY);

      const data = await getProductsData({
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
      <div className={styles.cards}>
        {renderDataList.map((data, idx) => (
          <Card key={idx} data={data} />
        ))}
      </div>
    </div>
  );
}
