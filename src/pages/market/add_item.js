import {
  FormInput,
  FormTextarea,
  NumberInput,
} from "components/commons/Inputs";
import Tag from "components/commons/Tag";
import GNB from "components/layouts/GNB";
import { MainLayout } from "components/layouts/Layout";
import React, { useEffect, useState } from "react";
import { addCommas, removeCommas } from "utils/commas";

export default function AddItem() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [currentTag, setCurrentTag] = useState("");
  const [content, setTextContent] = useState("");

  return (
    <>
      <GNB />
      <MainLayout>
        <FormInput
          placeholder="상품명을 입력해주세요"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <NumberInput
          placeholder="판매 가격을 입력해주세요"
          value={price}
          onChange={(e) => {
            setPrice(Number(removeCommas(e.target.value)));
          }}
        />
        <FormInput
          placeholder="태그를 입력해주세요"
          value={currentTag}
          onChange={(e) => {
            setCurrentTag(e.target.value);
          }}
        />
        <FormTextarea
          placeholder="상품 소개를 입력해주세요"
          content={content}
          onChange={(e) => {
            setTextContent(e.target.value);
          }}
        />
        <Tag>티셔츠</Tag>
        <Tag>상의</Tag>
      </MainLayout>
    </>
  );
}
