import { useState, useEffect } from "react";
import { getItems } from "../api";
import ItemBox from "./ItemBox";
import "../styles/MainItemList.css";

const MainItemList = () => {
  const [MainItem, setMainItem] = useState([]);
  const [order, setOrder] = useState("recent");

  const handleSortedChange = (e) => {
    setOrder(e.target.value);
  };

  const handleMainItemListLoad = async () => {
    const { list } = await getItems(order, 1, 10);
    setMainItem(list);
  };
  useEffect(() => {
    handleMainItemListLoad();
  }, [order]);
  return (
    <section className="main-container">
      <div className="main-header">
        <h2 className="main-header-title">전체 상품</h2>
        <div className="main-header-right">
          <div className="main-item-filter">
            <form className="search-form">
              <input
                type="search"
                name="search"
                placeholder="검색할 상품을 입력해주세요"
              />
            </form>
            <a href="additem">
              <button className="search-submit">상품 등록하기</button>
            </a>
          </div>
          <select className="select-box" onChange={handleSortedChange}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
      <div className="main-item-list">
        {MainItem.map((item) => {
          return <ItemBox key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default MainItemList;
