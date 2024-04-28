import React from "react";
import { Link } from "react-router-dom";

import "../css/ListTitle.css";

const OrderNav = ({ onChangeOrder }) => {
  return (
    <form className="OrderNav">
      <input type="text" placeholder="검색할 상품을 입력해주세요" />
      <button>
        <Link to="/additem" className="link">
          상품 등록하기
        </Link>
      </button>
      <select onChange={onChangeOrder}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </form>
  );
};

function ListTitle({ title, sort, onChangeOrder }) {
  return (
    <div className="ListTitle">
      <div>{title}</div>
      {sort && (
        <div>
          <OrderNav onChangeOrder={onChangeOrder} />
        </div>
      )}
    </div>
  );
}

export default ListTitle;
