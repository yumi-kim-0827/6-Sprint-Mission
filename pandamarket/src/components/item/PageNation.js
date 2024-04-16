import React from "react";
import PageNationButton from "../PageNationButton";
import "../item/PageNation.css";
import arrowLeft from "../../assets/arrow_left.svg";
import arrowRight from "../../assets/arrow_right.svg";

export default function PageNation() {
  const list = [1, 2, 3, 4, 5];
  return (
    <div className="pageNation">
      <PageNationButton>
        <img src={arrowLeft} />
      </PageNationButton>
      {list.map((index, i) => (
        <PageNationButton key={i}>{index}</PageNationButton>
      ))}
      <PageNationButton>
        <img src={arrowRight} />
      </PageNationButton>
    </div>
  );
}
