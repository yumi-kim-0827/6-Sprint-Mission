import React from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "./components/ProductInfo";

function CommunityFeedPage() {
  const { productID } = useParams();

  return (
    <section>
      <ProductInfo />
      <button>목록으로 돌아가기</button>
    </section>
  );
}

export default CommunityFeedPage;
