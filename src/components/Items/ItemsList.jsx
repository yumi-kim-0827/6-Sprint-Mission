import { useState, useEffect } from "react";
import "../../styles/Items/ItemsList.css";

import SearchBox from "./SearchBox.jsx";
import Button from "../Button.jsx";
import DropdownOrder from "./DropdownOrder.jsx";
import Item from "./Item.jsx";
import { getData } from "../../apis/apis.js";
import Pagenation from "../Pagenation.jsx";

const ITEMS_PER_PAGE = 10;

const ItemsList = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("최신순");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // 데이터 로드
  useEffect(() => {
    const loadData = async () => {
      const newData = await getData();
      setData(newData.list);
      setTotalPages(Math.ceil(newData.totalCount / ITEMS_PER_PAGE));
    };
    loadData();
  }, []);

  // 페이지 및 정렬 변경 시 데이터 로드
  useEffect(() => {
    const orderText = order === "최신순" ? "recent" : "favorite";
    const loadData = async () => {
      const newData = await getData(orderText, currentPage);
      setData(newData.list);
      setTotalPages(Math.ceil(newData.totalCount / ITEMS_PER_PAGE));
    };
    loadData();
  }, [order, currentPage]);

  // 최신순, 좋아요순 정렬
  const orderChangeHandler = (orderText) => {
    setOrder(orderText);
    setCurrentPage(1);
  };

  // 페이지네이션 클릭 핸들러
  const handlePagePrevBtn = () => {
    if (currentPage === 1) return;
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handlePageNextBtn = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePageBtn = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="ItemsList__wrapper">
      <div className="ItemsList__menu_bar">
        <h1 className="ItemsList__menu_bar__title">전체 상품</h1>
        <div className={"ItemsList__menu_bar__right"}>
          <SearchBox />
          <div className="ItemsList__menu_bar__button_wrapper">
            <Button text={"상품 등록하기"} />
          </div>
          <DropdownOrder
            order={order}
            orderChangeHandler={orderChangeHandler}
          />
        </div>
      </div>
      <div className="ItemsList__itemsWrapper">
        {data?.map((item) => (
          <Item
            key={item.id}
            imgSrc={item.images[0]}
            name={item.name}
            price={item.price}
            favoriteCount={item.favoriteCount}
          />
        ))}
      </div>
      <div className="ItemsList__pagination_wrapper">
        <Pagenation
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageBtn={handlePageBtn}
          handlePagePrevBtn={handlePagePrevBtn}
          handlePageNextBtn={handlePageNextBtn}
        />
      </div>
    </div>
  );
};

export default ItemsList;
