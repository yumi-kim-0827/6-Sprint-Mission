import React, { useEffect, useState } from "react";
import Card from "components/market/Card";
import styles from "styles/layout.module.scss";
import useDeviceState from "features/hooks/useDeviceState";
import iPad from "assets/img/mock/ipad.svg";

const MOCK_DATA_MOBILE = [
  { img: iPad, title: "아이패드 미니 팝니다", price: 500_000, likeCount: 240 },
];

const MOCK_DATA_TABLET = [
  { img: iPad, title: "아이패드 미니 팝니다", price: 500_000, likeCount: 240 },
  { img: iPad, title: "아이패드 미니 팝니다", price: 500_000, likeCount: 240 },
];

const MOCK_DATA_DESKTOP = [
  { img: iPad, title: "아이패드 미니 팝니다", price: 500_000, likeCount: 240 },
  { img: iPad, title: "아이패드 미니 팝니다", price: 500_000, likeCount: 240 },
  { img: iPad, title: "아이패드 미니 팝니다", price: 500_000, likeCount: 240 },
  { img: iPad, title: "아이패드 미니 팝니다", price: 500_000, likeCount: 240 },
];

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
