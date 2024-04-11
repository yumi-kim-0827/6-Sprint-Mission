import React, { useEffect, useState } from "react";
import Card from "components/market/Card";
import styles from "styles/markets.module.scss";
import useDeviceState from "features/hooks/useDeviceState";
import iPad from "assets/img/mock/ipad.svg";

const MOCK_DATA = {
  img: iPad,
  title: "아이패드 미니 팝니다",
  price: 500_000,
  likeCount: 240,
};

const MOCK_DATA_MOBILE = new Array(1).fill(MOCK_DATA);
const MOCK_DATA_TABLET = new Array(2).fill(MOCK_DATA);
const MOCK_DATA_DESKTOP = new Array(4).fill(MOCK_DATA);

export default function BestProducts() {
  const deviceState = useDeviceState();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    if (deviceState === "mobile") setDatas(MOCK_DATA_MOBILE);
    if (deviceState === "tablet") setDatas(MOCK_DATA_TABLET);
    if (deviceState === "desktop") setDatas(MOCK_DATA_DESKTOP);
  }, [deviceState]);

  return (
    <div className={styles.best__products}>
      <h1 className={styles.title}>베스트 상품</h1>
      <div className={styles.cards}>
        {datas.map((data, idx) => (
          <Card key={idx} data={data} />
        ))}
      </div>
    </div>
  );
}
