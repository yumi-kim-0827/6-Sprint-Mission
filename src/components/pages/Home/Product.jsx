import React from "react";

const Product = () => {
  return (
    <div className="">
      <div className="">
        <span className="">전체 상품</span>
        <div className="">
          <input className=""
            type="text"
            placeholder="🔍 상품을 검색해주세요"
            value={value}
          />
          <section className="">
            <option value={"latest"}>최신순</option>
            <option value={"like"}>좋아요 순</option>
          </section>
        </div>
        <div>
          <div className="" src={"images"} alt={"name"} />
          <div className="">{"name"}</div>
          <div className="">{"price"}원</div>
          {"Likes" && (
            <div className="">
              {"Count" !== 0 ? (src = {}) : (src = {})} {"Count"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
