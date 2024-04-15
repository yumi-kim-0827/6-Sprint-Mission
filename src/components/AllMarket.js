import React, { useEffect, useState } from "react";
import "../stlye/allMarket.css";
import Button from "../common/Button";
import HeartIcon from "../assets/icon/ic_heart.svg";
import Arrow_left from "../assets/icon/ic_arrow_left.svg";
import Arrow_right from "../assets/icon/ic_arrow_right.svg";
import { Link } from "react-router-dom";
import { SearchInput } from "./SearchInput";
import Commas from "../util/Commas";
import SelectBtn from "./SelectBtn";
import { getData } from "./API";

export default function AllMarket() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { list, totalCount } = await getData({
          page: currentPage,
          size: pageSize,
          order,
        });
        setData(list);
        setTotalPages(Math.ceil(totalCount / pageSize));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage, order]);

  const handleSortOrderChange = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div
          key={i}
          onClick={() => handlePageChange(i)}
          className={"pageBtn " + (currentPage === i ? "active" : "")}
        >
          {i}
        </div>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <div className="all-market">
        <div className="all-header">
          <div>
            <h1 className="all-title">전체 상품</h1>
          </div>
          <div className="all-search-input">
            <div className="searchInput">
              <SearchInput />
            </div>
            <div className="button">
              <Button to="/additem">상품 등록하기</Button>
            </div>
            <div className="selectInput">
              <SelectBtn onChange={handleSortOrderChange} />
            </div>
          </div>
        </div>
        {data.length > 0 && (
          <div className="cards">
            {data.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <div className="card">
                  <img
                    className="all-img"
                    src={item.images[0]}
                    alt={item.name}
                  />
                  <p className="all-name">{item.name}</p>
                  <p className="all-price">{Commas(item.price)}원</p>
                  <div className="like">
                    <img src={HeartIcon} alt="Heart" />
                    <p>{item.favoriteCount}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="pagination">
        <div className="pageBtn">
          <img
            src={Arrow_left}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            alt="arrow_left"
          />
        </div>
        {renderPageNumbers()}
        <div className="pageBtn">
          <img
            src={Arrow_right}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            alt="arrow_right"
          />
        </div>
      </div>
    </>
  );
}
