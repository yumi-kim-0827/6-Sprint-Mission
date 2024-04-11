import React, { useEffect, useState } from "react";
import RobotVaccum from "assets/img/mock/robot_vacuum.svg";
import styles from "styles/markets.module.scss";
import useDeviceState from "features/hooks/useDeviceState";
import Card from "./Card";
import Button from "components/commons/Button";
import { SearchInput, SelectInput } from "components/commons/Inputs";

const MOCK_DATA = {
  img: RobotVaccum,
  title: "로봇 청소기",
  price: 1_500_000,
  likeCount: 240,
};

const MOCK_DATA_MOBILE = new Array(4).fill(MOCK_DATA);
const MOCK_DATA_TABLET = new Array(6).fill(MOCK_DATA);
const MOCK_DATA_DESKTOP = new Array(10).fill(MOCK_DATA);

export default function AllProducts() {
  const deviceState = useDeviceState();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    if (deviceState === "mobile") setDatas(MOCK_DATA_MOBILE);
    if (deviceState === "tablet") setDatas(MOCK_DATA_TABLET);
    if (deviceState === "desktop") setDatas(MOCK_DATA_DESKTOP);
  }, [deviceState]);

  return (
    <div className={styles.all__products}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {deviceState === "desktop" ? "전체 상품" : "판매 중인 상품"}
        </h1>
        {/* TODO: 클래스 네임 props로 변경 */}
        <div className={styles.button}>
          <Button>상품 등록하기</Button>
        </div>
        <div className={styles.searchInput}>
          <SearchInput />
        </div>
        <div className={styles.selectInput}>
          <SelectInput />
        </div>
      </div>

      <div className={styles.cards}>
        {datas.map((data, idx) => (
          <Card key={idx} data={data} />
        ))}
      </div>
    </div>
  );
}
