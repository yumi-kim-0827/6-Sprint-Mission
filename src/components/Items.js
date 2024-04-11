import Main from "./Main.js";
import { useEffect, useState } from "react";

export default function Items() {
  //상품 목록 state 배열로 저장, props로 베스트 상품, 판매 중인 상품으로 전달
  const [items, setItems] = useState([]);

  //상품 목록 fetch useEffect로 한 번
  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(`https://panda-market-api.vercel.app/products`);
      const data = await res.json();

      setItems(data.list);
    };
    fetchItems();
  }, []);

  // 임시, 확인을 위한 콘솔 출력
  useEffect(() => {
    console.log(items); // 상품 목록 출력
  }, [items]);

  return (
    <>
      <Main items={items} />
    </>
  );
}
