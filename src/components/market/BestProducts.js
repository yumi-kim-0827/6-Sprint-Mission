import React, { useEffect, useState } from "react";
import Card from "components/market/Card";
import styles from "styles/markets.module.scss";
import useDeviceState from "features/hooks/useDeviceState";
import iPad from "assets/img/mock/ipad.png";
import Book from "assets/img/mock/book.png";
import WashingMachine from "assets/img/mock/washing-machine.png";
import Oven from "assets/img/mock/oven.png";

const MOCK_DATA_MOBILE = [
  {
    id: 1,
    images: [iPad],
    name: "아이패드 미니 팝니다",
    price: 500_000,
    favoriteCount: 1000,
  },
];

const MOCK_DATA_TABLET = [
  {
    id: 1,
    images: [iPad],
    name: "아이패드 미니 팝니다",
    price: 500_000,
    favoriteCount: 240,
  },
  {
    id: 2,
    images: [Book],
    name: "책 팝니다",
    price: 50_000,
    favoriteCount: 800,
  },
];

const MOCK_DATA_DESKTOP = [
  {
    id: 1,
    images: [iPad],
    name: "아이패드 미니 팝니다",
    price: 500_000,
    favoriteCount: 240,
  },
  {
    id: 2,
    images: [Book],
    name: "책 팝니다",
    price: 50_000,
    favoriteCount: 800,
  },
  {
    id: 3,
    images: [WashingMachine],
    name: "세탁기 팝니다",
    price: 500_000,
    favoriteCount: 700,
  },
  {
    id: 4,
    images: [Oven],
    name: "오븐 팝니다",
    price: 300_000,
    favoriteCount: 500,
  },
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
