import { useState } from "react";
import { ViewItemList } from "../view/ViewItemList";

export function View (){
  const [order, setOrder] = useState("recent");

  return (
    <div className="view">
      <section className="secion-best">
        <div className="section-wrap">
          <h2 className="section-tit">베스트 상품</h2>
          <div className="section-content">
            <ViewItemList order="favorite"/>
          </div>
        </div>
      </section>
      <section className="secion-items">
        <div className="section-wrap">
          <h2 className="section-tit">전체 상품</h2>
          <div className="section-content">
            <ViewItemList order="recent"/>
          </div>
        </div>
      </section>
    </div>
  );
}