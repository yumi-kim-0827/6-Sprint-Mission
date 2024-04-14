import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import OrderDropDown from "./OrderDropDown";
import "./ItemListNav.css";

function ItemListNav({ order, setOrder }) {
  return (
    <nav className="item-nav">
      <h1 className="section-title">전체 상품</h1>
      <ul className="nav-tools">
        <li>
          <SearchBar />
        </li>
        <li>
          <Link className="button" to="/additem">
            상품 등록하기
          </Link>
        </li>
        <li>
          <OrderDropDown order={order} setOrder={setOrder} />
        </li>
      </ul>
    </nav>
  );
}

export default ItemListNav;
