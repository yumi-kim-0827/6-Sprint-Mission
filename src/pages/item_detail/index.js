import React, { useState, useEffect } from "react";
import {
  Main,
  BackToListButton,
  InquirySection,
  CommentSection,
} from "./style";
import ic_back from "../../image/ic_back.svg";
import ProductInfo from "./ProductInfo";

const ItemDetail = () => {


  return (
    <Main>
      <ProductInfo/>
      <InquirySection></InquirySection>
      <CommentSection></CommentSection>
      <BackToListButton>
        <span>목록으로 돌아가기</span>
        <img src={ic_back} alt="목록으로 돌아가기" />
      </BackToListButton>
    </Main>
  );
};

export default ItemDetail;
