import { useState, useEffect } from "react";
import "../../styles/Items/ItemsList.css";

import SearchBox from "./SearchBox.jsx";
import Button from "../Button.jsx";
import DropdownOrder from "./DropdownOrder.jsx";
import Item from "./Item.jsx";
// import Pagenation from "../Pagenation.jsx";

import { getData } from "../../apis/apis.js";
// import {
//   calculateTotalPages,
//   renderPageButtons,
// } from "../../utils/PagenationUtils.js";

// const PAGE_SIGE = 10;

const ItemsList = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("최신순");

  const [page, setPage] = useState(1);
  // const [totalPostCount, setTotalPostCount] = useState(0);
  // const handlePrevPage = () => {
  //   if (page > 1) {
  //     setPage((prevPage) => prevPage - 1);
  //   }
  // };
  // const handleNextPage = () => {
  //   const totalPages = calculateTotalPages(totalPostCount, PAGE_SIGE);
  //   if (page < totalPages) {
  //     setPage((prevPage) => prevPage - 1);
  //   }
  // };

  const orderHandler = (orderText) => {
    setOrder(orderText);
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await getData();
      setData(data.list);
      // setTotalPostCount(data.totalCount);
    };
    loadData();
  }, []);

  useEffect(() => {
    const orderText = order === "최신순" ? "recent" : "favorite";
    const loadData = async () => {
      const data = await getData(orderText, page);
      setData(data.list);
      // setTotalPostCount(data.totalCount);
    };
    loadData();
  }, [order, page]);

  return (
    <div className="ItemsList__wrapper">
      <div className="ItemsList__menu_bar">
        <h1 className="ItemsList__menu_bar__title">전체 상품</h1>
        <div className={"ItemsList__menu_bar__right"}>
          <SearchBox />
          <div className="ItemsList__menu_bar__button_wrapper">
            <Button text={"상품 등록하기"} />
          </div>
          <DropdownOrder order={order} orderHandler={orderHandler} />
        </div>
      </div>
      <div className="ItemsList__itemsWrapper">
        {data.length === 0 ? (
          <></>
        ) : (
          data.map((item) => (
            <Item
              key={item.id}
              imgSrc={item.images[0]}
              name={item.name}
              price={item.price}
              favoriteCount={item.favoriteCount}
            />
          ))
        )}
      </div>
      <div className="ItemsList__pagination_wrapper">
        {/* <Pagenation
          totalPostCount={totalPostCount}
          page={page}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        /> */}
      </div>
    </div>
  );
};

export default ItemsList;
