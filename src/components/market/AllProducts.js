import React, { useEffect, useState } from "react";
import styles from "styles/markets.module.scss";
import useDeviceState from "features/hooks/useDeviceState";
import Card from "./Card";
import Button from "components/commons/Button";
import { SearchInput, SelectInput } from "components/commons/Inputs";

export default function AllProducts({ data }) {
  const deviceState = useDeviceState();

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
        {data.map((data, idx) => (
          <Card key={idx} data={data} />
        ))}
      </div>
    </div>
  );
}
