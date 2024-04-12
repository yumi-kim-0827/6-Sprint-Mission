import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./ItemListNav.css";
import OrderDropDown from "./OrderDropDown";

function ItemListNav({ order, setOrder }) {
  return (
    <nav className="item-nav">
      <h1 className="section-title">베스트 상품</h1>
      <ul className="nav-tools">
        <li>
          <SearchBar />
        </li>
        <li>
          <Link to="/additem">상품 등록하기</Link>
        </li>
        <li>
          <OrderDropDown order={order} setOrder={setOrder} />
        </li>
      </ul>
    </nav>
  );
}

export default ItemListNav;
