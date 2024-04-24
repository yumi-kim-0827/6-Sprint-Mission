import React from "react";
import { Main, BackToListButton, ProductInfoSection,InquirySection,CommentSection } from "./style";
import ic_back from "../../image/ic_back.svg"
import { useParams } from "react-router-dom";

const ItemDetail = () => {
    const { productId } = useParams();

  return (
    <Main>
      <ProductInfoSection></ProductInfoSection>
      <InquirySection></InquirySection>
      <CommentSection></CommentSection>
      <BackToListButton>
        <span>목록으로 돌아가기</span>
        <img src={ic_back} alt="목록으로 돌아가기"/>
      </BackToListButton>
    </Main>
  );
};

export default ItemDetail;
