import React, { useState, useEffect } from "react";
import "./allitem.css";
import heart from "../../../assets/item/ic_heart.svg";
import search from "../../../assets/item/ic_search.svg";
import dropdown from "../../../assets/item/ic_arrow_down.svg";
import { fetchProducts } from "../../../apis/api.tsx";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  favoriteCount: number;
  images: string[];
  createdAt: string;
}

const ITEMS_PER_PAGE = 10;

export default function AllItem() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("최신순");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(sortBy);
        setSortedProducts(data.list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [sortBy, currentPage]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSortChange = (sortOption: string) => {
    setSortBy(sortOption);
    console.log("sortBy 상태:", sortOption);
    toggleDropdown();
  };

  const sortOptions = ["최신순", "좋아요순"];

  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return sortedProducts.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="allitems-container">
      <div className="allitems-header">
        <h2 className="allitems-writter">전체 상품</h2>
        <div className="allitems-header-rightside">
          <div className="allitems-search">
            <img
              src={search}
              alt="돋보기 아이콘"
              className="allitems-search_ic"
            />
            <input
              type="search"
              placeholder="검색할 상품을 입력해주세요"
              className="allitems-search_write"
            />
          </div>
          <button
            className="allitems-btn"
            type="button"
            onClick={() => (window.location.href = "../additem")}
          >
            상품 등록하기
          </button>
          <div className="dropdown-container">
            <button
              className="allitems-dropdown"
              type="button"
              onClick={toggleDropdown}
            >
              <span className="allitems-dropdown_write">{sortBy}</span>
              <img src={dropdown} alt="드롭다운 아이콘" />
            </button>
            <div className="dropdown-content-container">
              {showDropdown && (
                <div className="dropdown-content">
                  {sortOptions.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleSortChange(option)}
                      className="dropdown-content-item"
                    >
                      {option}
                    </li>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="allitem">
        {getCurrentItems().map((product: Product) => (
          <div key={product.id} className="allitem-container">
            <div>
              {product.images.map((image) => (
                <img
                  className="allitem-image"
                  key={image}
                  src={image}
                  alt="상품 이미지"
                />
              ))}
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}원</p>
            <p>
              <img src={heart} alt="하트 아이콘" />
              {product.favoriteCount}
            </p>
          </div>
        ))}
      </div>

      {/* 페이지 네이션 사용해보기...*/}
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </button>
        <span className="pagination-current">{currentPage}</span>
        <button
          className="pagination-btn"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </button>
      </div>
    </div>
  );
}
