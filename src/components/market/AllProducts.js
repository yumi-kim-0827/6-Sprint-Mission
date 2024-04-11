import React, { useEffect, useState } from "react";
import styles from "styles/markets.module.scss";
import useDeviceState from "features/hooks/useDeviceState";
import Card from "./Card";
import Button from "components/commons/Button";
import { SearchInput, SelectInput } from "components/commons/Inputs";

export default function AllProducts() {
  const deviceState = useDeviceState();
  const [allProducts, setAllProducts] = useState([]);
  const [datas, setDatas] = useState([]);
  const [order, setOrder] = useState("최신순");

  const getData = async () => {
    const response = await fetch(
      "https://panda-market-api.vercel.app/products"
    );
    const data = await response.json();
    setAllProducts(data.list);
  };

  useEffect(() => {
    if (allProducts.length === 0) return;

    const originalDatas = [...allProducts];
    let slicedData = [];

    if (deviceState === "mobile") {
      if (order === "최신순") {
        slicedData = originalDatas
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4);
      } else if (order === "좋아요순") {
        slicedData = originalDatas
          .sort((a, b) => b.favoriteCount - a.favoriteCount)
          .slice(0, 4);
      } else {
        slicedData = originalDatas.slice(0, 4);
      }
    } else if (deviceState === "tablet") {
      if (order === "최신순") {
        slicedData = originalDatas.slice(0, 6);
      } else if (order === "좋아요순") {
        slicedData = originalDatas
          .sort((a, b) => b.favoriteCount - a.favoriteCount)
          .slice(0, 6);
      } else {
        slicedData = originalDatas.slice(0, 6);
      }
    } else if (deviceState === "desktop") {
      slicedData =
        order === "최신순"
          ? originalDatas
          : originalDatas.sort((a, b) => b.favoriteCount - a.favoriteCount);
    }

    setDatas(slicedData);
  }, [deviceState, allProducts, order]);

  // useEffect(() => {
  //   if (order === "최신순") {
  //     setDatas((prev) => [...prev.sort((a, b) => b.createdAt - a.createdAt)]);
  //   }
  //   // if (order === "좋아요순") {
  //   //   setDatas((prev) => [
  //   //     ...prev.sort((a, b) => b.favoriteCount - a.favoriteCount),
  //   //   ]);
  //   // }
  // }, [order]);

  useEffect(() => {
    getData();
  }, []);

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
          <SelectInput order={order} setOrder={setOrder} />
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
