import React from "react";
import Card from "components/items/Card";

export default function BestProducts() {
  return (
    <div>
      <h1>베스트 상품</h1>
      <Card title="아이패드 미니 팝니다" price={500000} likeCount={240} />
    </div>
  );
}
