import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import OrderDropDown from "./OrderDropDown";
import "./ItemListNavMobile.css";

function ItemListNavMobile({ order, setOrder }) {
  return (
    <nav className="item-nav">
      <div className="register">
        <h1 className="section-title">베스트 상품</h1>
        <Link className="button" to="/additem">
          상품 등록하기
        </Link>
      </div>
      <div className="search-and-sort">
        <SearchBar />
        <OrderDropDown order={order} setOrder={setOrder} />
      </div>
    </nav>
  );
}

export default ItemListNavMobile;
