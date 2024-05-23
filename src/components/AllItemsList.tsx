import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import useFetchItems from "../api/useFetchItems";
import { arrowDown, favoriteIcon, searchIcon, sortButton } from "../images";
import paginationStore from "../store/paginationStore";
import { useProductCountStore } from "../store/productCountStore";
import formatNumber from "../utils/formatNumber";
import { Pagination, SortDropdown } from ".";

export default function AllItemsList() {
  // 정렬 옵션을 위한 객체입니다.
  const sortOptions = {
    LIKE: "좋아요순",
    NEWEST: "최신순",
  };

  // 드롭다운 on off를 위한 state입니다.
  const [dropdownView, setDropdownView] = useState(false);
  // 최신순으로 데이터를 받아올지, 좋아요 순으로 데이터를 받아올지 정하는 state입니다.
  const [orderBy, setOrderBy] = useState("favorite");
  // 정렬 후 화면으로 최신순인지 좋아요순인지 보여줍니다.
  // * api를 받은 후 좋아요 순으로 정렬 되어 있어 기본 값을 좋아요순으로 바꾸었습니다.
  const [sortContent, setSortContent] = useState(sortOptions.LIKE);

  // 화면 전환 시 달라지는 전체 상품 데이터들을 전역적으로 관리하였습니다.
  const productCount = useProductCountStore();
  // 페이지네이션을 버튼 클릭시 현재 페이지를 눌러 랜더링 하도록 데이터를 만들었습니다.
  const currentPage = paginationStore((state) => state.currentPage);

  // 드롭다운을 외부에서 클릭 시 닫히게 하기위한 Ref와 Effect입니다.
  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // 드롭다운이 존재하고 클릭한 요소가 드롭다운 밖에 있으면 드롭다운을 닫습니다.
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownView(false);
      }
    };

    const dropdownNode = dropdownRef.current;

    if (dropdownNode) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (dropdownNode) {
        document.addEventListener("mousedown", handleClickOutside);
      }
    };
  }, [dropdownRef]);

  // 데이터를 가져오기 위한 옵션입니다.
  const fetchOptions = {
    page: currentPage,
    pageSize: productCount,
    orderBy: orderBy,
  };

  // useFetchItems로 데이터를 가져옵니다.
  const { data, isLoading, isError, error } = useFetchItems(fetchOptions);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error : {error.message}</div>;
  }

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
            <span>{sortContent}</span>
            <img src={arrowDown} alt="arrowdown" className="inline" />
            {dropdownView && (
              <div ref={dropdownRef}>
                <SortDropdown
                  setSortContent={setSortContent}
                  setOrderBy={setOrderBy}
                  sortOptions={sortOptions}
                />
              </div>
            )}
          </div>
          <div
            className="relative flex justify-between sm:hidden"
            onClick={() => setDropdownView(!dropdownView)}
          >
            <img src={sortButton} alt="sortbutton" />
            {dropdownView && (
              <div ref={dropdownRef}>
                <SortDropdown
                  setSortContent={setSortContent}
                  setOrderBy={setOrderBy}
                  sortOptions={sortOptions}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {data?.list &&
          data?.list.map((post: any) => {
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
                  {formatNumber(post.price)}원
                </p>
                <img src={favoriteIcon} alt="favoriteicon" className="inline" />
                <span className="ml-1 text-xs">{post.favoriteCount}</span>
              </li>
            );
          })}
      </ul>
      <Pagination datatotalCount={data?.totalCount} />
    </div>
  );
}
