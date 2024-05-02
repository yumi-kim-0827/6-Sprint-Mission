import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getItems } from "../api";
import searchIcon from "../assets/icons/ic_search.svg";
import { usePagination } from "../contexts/paginationContext";
import "../css/AllItems.css";
import { isDesktop } from "../module";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import Item from "./Item";
import Pagination from "./Pagination";

function AllItems({ className, pageSize }) {
  const initialValue = isDesktop() ? "전체 상품" : "판매 중인 상품";
  const [subHeading, setSubHeading] = useState(initialValue);
  const [order, setOrder] = useState("recent");
  const [items, setItems] = useState([]);
  const { page } = usePagination();

  const handleLoad = async (options) => {
    const { list } = await getItems(options);
    setItems(list);
  };

  useEffect(() => {
    handleLoad({ order, page, pageSize });
  }, [order, page, pageSize]);

  const handleSubHeading = (e) => {
    isDesktop() ? setSubHeading("전체 상품") : setSubHeading("판매 중인 상품");
  };

  const handleClick = (value) => {
    setOrder(value);
  };

  window.addEventListener("resize", handleSubHeading);

  return (
    <div className={className}>
      <div className="all-items__container">
        <h2 className="all-items__name-tag">{subHeading}</h2>
        <div className="all-items__search-container">
          <label htmlFor="search" className="all-items__search-icon">
            <img src={searchIcon} alt="search"></img>
          </label>
          <input
            id="search"
            className="all-items__search"
            placeholder="검색할 상품을 입력해주세요"
          ></input>
        </div>
        <Link className="all-items__add-item-link" to="/additem">
          상품 등록하기
        </Link>
        <Dropdown order={order} setOrder={setOrder}>
          <DropdownItem
            onClick={handleClick}
            position={"top"}
            value={"recent"}
            label={"최신순"}
          />
          <DropdownItem
            onClick={handleClick}
            position={"bottom"}
            value={"favorite"}
            label={"좋아요순"}
          />
        </Dropdown>
      </div>
      <div className="all-items__layout">
        {items &&
          items.map((item) => {
            return <Item key={item.id} type="all-item" item={item} />;
          })}
      </div>
      <Pagination className="pagination" />
    </div>
  );
}

export default AllItems;
