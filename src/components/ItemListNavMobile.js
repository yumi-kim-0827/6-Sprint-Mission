import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./ItemListNav.css";
import OrderDropDown from "./OrderDropDown";

function ItemListNavMobile({ order, setOrder }) {
  return (
    <nav className="item-nav">
      <div>
        <h1 className="section-title">베스트 상품</h1>
        <Link to="/additem">상품 등록하기</Link>
      </div>
      <div>
        <SearchBar />
        <OrderDropDown order={order} setOrder={setOrder} />
      </div>
    </nav>
  );
}

export default ItemListNavMobile;
