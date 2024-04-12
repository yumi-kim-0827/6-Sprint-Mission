import { useState } from "react";
import { Link } from "react-router-dom";
import { useProductCountStore } from "../store/productCountStore";

import paginationStore from "../store/paginationStore";

import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination";

import searchIcon from "../images/ic_search.png";
import arrowDown from "../images/ic_arrow_down.png";
import sortButton from "../images/btn_sort.png";
import favoriteIcon from "../images/ic_heart.png";

export default function AllItemsList({ data }) {
  // 드롭다운 on off를 위한 state입니다.
  const [dropdownView, setDropdownView] = useState(false);
  // api의 list만을 받아 데이터를 사용하였습니다.
  const [allProducts, setAllProducts] = useState(data.list);

  // 화면 전환 시 달라지는 전체 상품 데이터들을 전역적으로 관리하였습니다.
  const productCount = useProductCountStore();
  // 페이지네이션을 버튼 클릭시 현재 페이지를 눌러 랜더링 하도록 데이터를 만들었습니다.
  const currentPage = paginationStore((state) => state.currentPage);

  // 정렬을 위한 함수입니다.
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
      (a, b) => b.favoriteCount - a.favoriteCount,
    );
    setAllProducts(sortedProducts);
  };

  return (
    <div className="mt-6 sm:mt-10">
      <div className="my-6 flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="mx-4 flex items-center justify-between sm:mx-0">
          <h1 className="text-xl font-bold text-[var(--footer-bg-color)]">
            전체 상품
          </h1>
          <Link
            to="/additem"
            className="inline rounded-lg bg-[var(--btn-blue1)] px-6 py-3 text-white sm:hidden"
          >
            상품 등록하기
          </Link>
        </div>
        <div className="mx-4 my-2 flex items-center justify-between gap-x-3 sm:mx-0 sm:my-0 sm:justify-normal">
          <div className="relative flex items-center">
            <img
              src={searchIcon}
              alt="searchicon"
              className="absolute left-4"
            />
            <input
              className="w-64 rounded-xl bg-[var(--cool-gray100)] py-2 pl-11 text-[var(--cool-gray400)] sm:w-56 sm:pr-1 lg:w-96"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <Link
            to="/additem"
            className="hidden rounded-lg bg-[var(--btn-blue1)] px-6 py-3 text-white sm:inline-block"
          >
            상품 등록하기
          </Link>
          <div
            className="relative hidden w-32 cursor-pointer justify-between rounded-xl border px-5 py-3 sm:inline-block sm:flex "
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
            className="relative flex justify-between sm:hidden"
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
      {/* 클릭 시 페이지 * 화면 전환에 따른 제품 개수로 렌더링 하도록 구현하였습니다. */}
      <ul className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {allProducts &&
          allProducts
            .slice(
              currentPage * productCount - productCount,
              currentPage * productCount,
            )
            .map((post) => {
              return (
                <li key={post.id}>
                  <img
                    src={post.images[0]}
                    alt={post.name}
                    className="h-40 w-40 rounded-2xl object-fill sm:h-56 sm:w-56"
                  />
                  <p className="mt-4 text-sm font-medium text-[var(--cool-gray800)]">
                    {post.name} 팝니다
                  </p>
                  <p className="text-sm font-bold text-[var(--cool-gray800)]">
                    {post.price}원
                  </p>
                  <img
                    src={favoriteIcon}
                    alt="favoriteicon"
                    className="inline"
                  />
                  <span className="ml-1 text-xs">{post.favoriteCount}</span>
                </li>
              );
            })}
      </ul>
      <Pagination datatotalCount={data.totalCount} />
    </div>
  );
}
