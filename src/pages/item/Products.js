import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductElement from "./ProductElement";
import "./products.css";
import {useLoading} from "../../hooks/loading";
import SelectOrderButton from "../../component/SelectOrderButton";
import PageNav from "../../component/PageNav";
import LoadingMessage from "../../component/LoadingMessage";

const Products = ({ numOfItemsToShow }) => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [isLoading, loadingError, noResult, handleLoad] = useLoading();
  const loadingMessage = isLoading || loadingError || noResult;
  const [search, setSearch] = useState("");
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsTotalCount, setProductsTotalCount] = useState(0);
  const totalPageCount = Math.ceil(productsTotalCount / numOfItemsToShow);

  //페이지네이션 숫자 설정
  const settingPageNumbers = (totalPageCount) => {
    if (totalPageCount === 0) {
      return;
    }
    //5번까지 없을 경우
    if (totalPageCount < 5) {
      const firstPageNumbers = Array.from(
        { length: totalPageCount },
        (_, index) => index + 1
      );
      setPageNumbers(firstPageNumbers);
    }
    //현재 페이지가 화면이 커지면서 사라지는 경우
    if (totalPageCount < currentPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  //상품 LOAD
  const handleProductsLoad = async () => {
    const result = await handleLoad({
      orderBy: order,
      pageSize: numOfItemsToShow,
      page: currentPage,
      keyword: search,
    });
    if (result) {
      setProducts(result.list);
      setProductsTotalCount(result.totalCount);
      //페이지 번호 설정
      const totalPageCount = Math.ceil(result.totalCount / numOfItemsToShow);
      settingPageNumbers(totalPageCount);
    }
  };

  // "<" 버튼
  const prevPageBtn = () => {
    if (currentPage === 1) {
      alert("첫 번째 페이지입니다");
      return;
    } else if (pageNumbers[0] === currentPage) {
      const prevPageNumbers = pageNumbers.map((pageNumber) => pageNumber - 5);
      setPageNumbers(prevPageNumbers);
    }
    setCurrentPage((prev) => prev - 1);
    return;
  };
  // ">" 버튼
  const nextPageBtn = () => {
    if (currentPage === totalPageCount) {
      alert("마지막 페이지입니다");
      return;
    }
    //페이지 번호가 넘어가야 하는 상황 EX) 1-5=>6-10
    if (pageNumbers[4] === currentPage) {
      // 페이지 번호가 넘어갔는데 5개 페이지가 안 나오는 경우
      if (pageNumbers[4] + 5 > totalPageCount) {
        const nextPageCount = totalPageCount - pageNumbers[4];
        const nextPageNumbers = Array.from(
          { length: nextPageCount },
          (_, index) => pageNumbers[4] + index
        );
        setPageNumbers(nextPageNumbers);
      } else {
        //5개 페이지가 나오는 경우
        const nextPageNumbers = pageNumbers.map((pageNumber) => pageNumber + 5);
        setPageNumbers(nextPageNumbers);
      }
    }
    setCurrentPage((prev) => prev + 1);
    return;
  };
  // 페이지 네이션 버튼 핸들러
  const handlePageBtn = (e) => {
    switch (e.target.value) {
      case "<":
        prevPageBtn();
        return;
      case ">":
        nextPageBtn();
        return;
      default:
        console.log(typeof e.target.value); // string 왜 스트링이 되는지 모르겠어요 ㅠㅠㅠ
        setCurrentPage(Number(e.target.value));
    }
  };

  //검색
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target["search"].value);
  };

  //정렬 선택하기
  const handleSelectOption = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  useEffect(() => {
    handleProductsLoad();
  }, [order, currentPage, numOfItemsToShow, search]);

  return (
    <div className="products-section">
      <div className="products-header">
        <span className="products-title">전체 상품</span>
        <div className="products-sort-section">
          <form onSubmit={handleSearchSubmit}>
            <input
              name="search"
              className="search-input"
              placeholder="검색할 상품을 입력해주세요"
            />
          </form>
          <Link className="register-product-btn" to="/additem">
            상품 등록하기
          </Link>
          <SelectOrderButton
            handleSelectOption={handleSelectOption}
            currentOrder={order}
          />
        </div>
      </div>
      <div className="products-content">
        {loadingMessage ? (
          <LoadingMessage
            isLoading={isLoading}
            loadingError={loadingError}
            noResult={noResult}
          />
        ) : (
          products.map((product) => (
            <ProductElement key={product.id} product={product} />
          ))
        )}
      </div>
      <PageNav
        currentPage={currentPage}
        handlePageBtn={handlePageBtn}
        pageNumbers={pageNumbers}
      />
    </div>
  );
};

export default Products;
