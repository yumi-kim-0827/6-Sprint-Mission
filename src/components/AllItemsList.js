import { useState, useEffect } from "react";

import searchIcon from "../images/ic_search.png";
import arrowDown from "../images/ic_arrow_down.png";
import sortButton from "../images/btn_sort.png";
import favoriteIcon from "../images/ic_heart.png";

import SortDropdown from "./SortDropdown";

export default function AllItemsList({ data, deviceSize }) {
  const [dropdownView, setDropdownView] = useState(false);
  const [productCount, setproductCount] = useState(1);
  const [allProducts, setAllProducts] = useState(data.list);

  useEffect(() => {
    if (deviceSize.isMobile) {
      setproductCount(4);
    } else if (deviceSize.isTablet) {
      setproductCount(6);
    } else if (deviceSize.isPC) {
      setproductCount(12);
    }
  }, [deviceSize]);

  const sortProductsByDate = (products) => {
    const sortedProducts = [...products].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
    setAllProducts(sortedProducts);
  };

  const sortProductsByLike = (products) => {
    const sortedProducts = [...products].sort(
      (a, b) => b.favoriteCount - a.favoriteCount
    );
    setAllProducts(sortedProducts);
  };

  return (
    <div className="my-10">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center my-6">
        <div className="flex justify-between items-center mx-4 sm:mx-0">
          <h1 className="text-xl text-[var(--footer-bg-color)]">전체 상품</h1>
          <button className="sm:hidden inline px-6 py-3 bg-[var(--btn-blue1)] rounded-lg text-white">
            상품 등록하기
          </button>
        </div>
        <div className="flex items-center gap-x-3 mx-4 sm:mx-0 justify-between sm:justify-normal my-2 sm:my-0">
          <div className="flex relative items-center">
            <img
              src={searchIcon}
              alt="searchicon"
              className="absolute left-4"
            />
            <input
              className="pl-11 py-2 bg-[var(--cool-gray100)] rounded-xl text-[var(--cool-gray400)] w-64 sm:w-56 lg:w-96 sm:pr-1"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <button className="hidden sm:inline-block px-6 py-3 bg-[var(--btn-blue1)] rounded-lg text-white">
            상품 등록하기
          </button>
          <div
            className="hidden sm:inline-block flex justify-between relative border rounded-xl px-5 py-3 cursor-pointer w-32"
            onClick={() => {
              setDropdownView(!dropdownView);
            }}
          >
            <span>최신순</span>
            <img src={arrowDown} alt="arrowdown" className="inline" />
            {dropdownView && (
              <SortDropdown
                sortProductsByDate={sortProductsByDate}
                sortProductsByLike={sortProductsByLike}
                allProducts={allProducts}
              />
            )}
          </div>
          <div
            className="sm:hidden relative flex justify-between"
            onClick={() => setDropdownView(!dropdownView)}
          >
            <img src={sortButton} alt="sortbutton" />
            {dropdownView && (
              <SortDropdown
                sortProductsByDate={sortProductsByDate}
                sortProductsByLike={sortProductsByLike}
                allProducts={allProducts}
              />
            )}
          </div>
        </div>
      </div>
      <ul className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 grid-rows-2 gap-x-6 gap-y-10">
        {allProducts &&
          allProducts.slice(0, productCount).map((post) => {
            return (
              <li key={post.id}>
                <img
                  src={post.images[0]}
                  alt={post.name}
                  className="object-fill h-40 sm:h-56 w-40 sm:w-56 rounded-2xl"
                />
                <p className="text-[var(--cool-gray800)] text-sm font-medium mt-4">
                  {post.name} 팝니다
                </p>
                <p className="text-[var(--cool-gray800)] text-sm font-bold">
                  {post.price}원
                </p>
                <img src={favoriteIcon} alt="favoriteicon" className="inline" />
                <span className="text-xs ml-1">{post.favoriteCount}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
