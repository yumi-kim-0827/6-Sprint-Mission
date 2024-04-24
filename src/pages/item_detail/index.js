import React from "react";
import { useNavigate } from "react-router-dom";
import { Main, BackToListButton, CommentSection } from "./style";
import ic_back from "../../image/ic_back.svg";
import ProductInfo from "./ProductInfo";
import Inquiry from "./Inquiry";

const ItemDetail = () => {

  const navigate = useNavigate();

  return (
    <Main>
      <ProductInfo />
      <Inquiry />
      <CommentSection></CommentSection>
      <BackToListButton onClick={()=>navigate('/items')}>
        <span>목록으로 돌아가기</span>
        <img src={ic_back} alt="목록으로 돌아가기" />
      </BackToListButton>
    </Main>
  );
};

export default ItemDetail;
