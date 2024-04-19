import { useState, useEffect } from "react";
import "../../styles/Items/ItemsList.css";

import SearchBox from "./SearchBox.jsx";
import Button from "../Button.jsx";
import DropdownOrder from "./DropdownOrder.jsx";
import Item from "./Item.jsx";
import { getData } from "../../apis/apis.js";
import Pagenation from "../Pagenation.jsx";
import { formatCurrency } from "../../utils/utils.js";

const ItemsList = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("최신순");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [displaySize, setDisplaySize] = useState("desktop");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // 데이터 로드
  useEffect(() => {
    // 데이터가 처음 로드될 때 브라우저 사이즈를 체크해서 스테이트 변경
    (function () {
      if (window.innerWidth < 1199 && window.innerWidth > 768) {
        setDisplaySize("tablet");
        setItemsPerPage(6);
      } else if (window.innerWidth < 767) {
        setDisplaySize("mobile");
        setItemsPerPage(4);
      } else {
        setDisplaySize("desktop");
        setItemsPerPage(10);
      }
    })();

    // window.innerWidth에 따라서 displaySize, itemsPerPage state 변경
    const resizeHandler = () => {
      if (window.innerWidth < 1199 && window.innerWidth > 768) {
        setDisplaySize("tablet");
        setItemsPerPage(6);
      } else if (window.innerWidth < 767) {
        setDisplaySize("mobile");
        setItemsPerPage(4);
      } else {
        setDisplaySize("desktop");
        setItemsPerPage(10);
      }
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // DisplaySize State가 변할 때 마다 itemsPerPage를 변경해서 API 재호출
  useEffect(() => {
    const orderText = order === "최신순" ? "recent" : "favorite";
    setCurrentPage(1);
    const loadData = async () => {
      const newData = await getData(orderText, currentPage, itemsPerPage);
      setData(newData.list);
      setTotalPages(Math.ceil(newData.totalCount / itemsPerPage));
    };
    loadData();
  }, [displaySize]);

  // 페이지 및 정렬 변경 시 데이터 로드
  useEffect(() => {
    const orderText = order === "최신순" ? "recent" : "favorite";
    const loadData = async () => {
      const newData = await getData(orderText, currentPage, itemsPerPage);
      setData(newData.list);
      setTotalPages(Math.ceil(newData.totalCount / itemsPerPage));
    };
    loadData();
  }, [order, currentPage]);

  // 최신순, 좋아요순 정렬
  const orderChangeHandler = (orderText) => {
    setOrder(orderText);
    // 정렬이 바뀌면 현재 페이지를 1로 바꿈
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
            displaySize={displaySize}
          />
        </div>
      </div>
      <div className="ItemsList__itemsWrapper">
        {data?.map((item) => (
          <Item
            key={item.id}
            imgSrc={item.images[0]}
            name={item.name}
            price={formatCurrency(item.price)}
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
