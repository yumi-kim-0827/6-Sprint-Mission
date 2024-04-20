import React from "react";
import axios from "axios";
import "./AddItemPage.css";
import ItemRegister from "./components/ItemRegister";
import AddItemImg from "./components/AddItemImg";
import AddDescription from "./components/AddDescription";
import AddTags from "./components/AddTags";

function AddItemPage() {
  const handleInputSubmit = (data) => {
    axios
      .post("https://panda-market-api.vercel.app/api/products", data)
      .then((response) => {
        console.log("상품 정보가 성공적으로 등록되었습니다.");
      })
      .catch((error) => {
        console.error("상품 정보 등록에 실패했습니다:", error);
      });
  };

  const handleDescriptionSubmit = (data) => {
    axios
      .post(
        "https://panda-market-api.vercel.app/api/products/description",
        data
      )
      .then((response) => {
        console.log("상품 소개가 성공적으로 등록되었습니다.");
      })
      .catch((error) => {
        console.error("상품 소개 등록에 실패했습니다:", error);
      });
  };

  return (
    <div class="AIPpadding">
      <ItemRegister />
      <p className="sectiontitle">상품 이미지</p>
      <AddItemImg />
      <AddDescription onSubmit={handleDescriptionSubmit} />
      <AddTags />
    </div>
  );
}

export default AddItemPage;
