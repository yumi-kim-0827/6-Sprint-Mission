import React from "react";

import "../css/ListTitle.css";

const OrderNav = () => {
  return (
    <form className="OrderNav">
      <input type="text" placeholder="검색할 상품을 입력해주세요" />
      <button>상품 등록하기</button>
      <select>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </form>
  );
};

function ListTitle({ sort }) {
  return (
    <div className="ListTitle">
      <div>최신순</div>
      {sort && (
        <div>
          <OrderNav />
        </div>
      )}
    </div>
  );
}

export default ListTitle;
