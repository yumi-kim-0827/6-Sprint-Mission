import { useState, useEffect } from "react";
import { getItems } from "../api";
import ItemBox from "./ItemBox";
import PagenationBar from "./PagenationBar";
import "../styles/MainItemList.css";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 4;
  } else if (width < 1200) {
    return 6;
  } else {
    return 10;
  }
};

const MainItemList = () => {
  const [MainItem, setMainItem] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());

  const handleSortedChange = (e) => {
    setOrderBy(e.target.value);
  };

  const handleMainItemListLoad = async () => {
    const { list } = await getItems(orderBy, page, pageSize);
    setMainItem(list);
  };
  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener("resize", handleResize);

    handleMainItemListLoad();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, page, pageSize]);
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
      <PagenationBar />
    </section>
  );
};

export default MainItemList;
