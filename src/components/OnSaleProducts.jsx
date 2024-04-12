import { Link } from "react-router-dom";
import "./OnSaleProducts.css";

export default function OnSaleProducts() {
  return (
    <>
      <div className="container-onSaleProducts">
        <div className="nav-onSaleProducts">
          <p>판매 중인 상품</p>
          <input placeholder="검색할 상품을 입력해주세요" />
          <Link to="/additem" className="btn btn-addProduct">
            상품 등록하기
          </Link>
        </div>
        <div>아이템 영역</div>
        <div>판매 중인 상품 영역</div>
      </div>
    </>
  );
}
