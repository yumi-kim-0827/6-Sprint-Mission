import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import BestProducts from "./BestProducts";
import AllProducts from "./AllProducts";
import { PAGESIZE } from "../../utils/constant";
import { getBestProducts, getItems } from "../../api/api";
import leftButton from "../../assets/btnLeft.svg";
import rightButton from "../../assets/btnRight.svg";
import pageNum from "../../assets/pageNumber.svg";

function FleaMarketPage() {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [loadingError, setLoadingError] = useState(null);
  
  // 베스트 상품
  const handleLoadBestProducts = async () => {
    let bestResult;
    try {
      setLoadingError(null);
      bestResult = await getBestProducts();
    } catch (error) {
      setLoadingError(error);
      return;
    }

    const { list } = bestResult;
    const sliceList = list.slice(0, 4);
    setBestProducts(sliceList);
  }

  // 전체 상품
  const handleLoadAllProducts = async (options) => {
    let result;
    try {
      setLoadingError(null);
      result = await getItems(options);
    } catch (error) {
      setLoadingError(error);
      return;
    }

    const { list } = result;
    if (options.page === 1) {
      setProducts(list);
    } else {
      setProducts([...products, ...list]);
    }
    setPage(options.page + 1);
  };
  
  const handleLoadMore = async () => {
    setPage((prev) => prev + 1);
    await handleLoadAllProducts({ page, pageSize: PAGESIZE, orderBy });
  };

  useEffect(() => {
    const initialPage = 1;
    setPage(initialPage);
    handleLoadAllProducts({ page: initialPage, pageSize: PAGESIZE, orderBy });
    handleLoadBestProducts();
  }, [orderBy]);

  return (
    <>
      {loadingError?.message ? (
        <ErrorContainer>{loadingError.message}</ErrorContainer>
      ) : (
        <FleaMarketContainer>
          <BestProducts bestProducts={bestProducts} />
          <AllProducts products={products} setOrderBy={setOrderBy} />
          <PageNationIconContainer>
            <img src={leftButton} alt="왼쪽 버튼" />
            <img src={pageNum} alt="페이지 번호" />
            <img src={rightButton} alt="오른쪽 버튼" onClick={handleLoadMore} />
          </PageNationIconContainer>
        </FleaMarketContainer>
      )}
    </>
  );
}

const FleaMarketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

const PageNationIconContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const ErrorContainer = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 250px;
`

export default FleaMarketPage;
