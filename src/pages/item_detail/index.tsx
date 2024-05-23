import React from "react";
import { useNavigate } from "react-router-dom";
import { Main, BackToListButton } from "./style";
import ic_back from "image/ic_back.svg";
import ProductInfo from "./ProductInfo/ProductInfo";
import Inquiry from "./Inquiry/Inquiry";
import Comments from "./Comments/Comments";

const ItemDetail = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <ProductInfo />
      <Inquiry />
      <Comments />
      <BackToListButton onClick={() => navigate("/items")}>
        <span>목록으로 돌아가기</span>
        <img src={ic_back} alt="목록으로 돌아가기" />
      </BackToListButton>
    </Main>
  );
};

export default ItemDetail;
