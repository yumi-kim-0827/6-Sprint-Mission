import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../../api/api";
import { styled } from "styled-components";
import ProductContainer from "./ProductContainer";
import firstImg from "../../assets/images/ipadImg.png";
import secondImg from "../../assets/images/bookImg.png";
import thirdImg from "../../assets/images/machineImg.png";
import fourthImg from "../../assets/images/ovenImg.png";
import Button from "../../common/Button";
import Accordian from "./Accordian";
import readingGlasses from "../../assets/readingGlasses.svg";
import leftButton from "../../assets/btnLeft.svg";
import rightButton from "../../assets/btnRight.svg";
import pageNum from "../../assets/pageNumber.svg";
import { PAGESIZE } from "../../utils/utils";

const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

const BestProductsContainer = styled.div`
  margin-bottom: 40px;
`;

const BestProducts = styled.div`
  display: flex;
  gap: 24px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: var(--main-text-color);
  margin-bottom: 16px;
`;

const AllProductsContainer = styled.div`
  margin-bottom: 40px;
`;

const AllProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const InputContainer = styled.div``;

const InputForm = styled.form`
  position: relative;
  display: flex;
  gap: 12px;
`;

const Input = styled.input`
  width: 352px;
  height: 42px;
  background: #f3f4f6;
  padding: 9px 0 9px 44px;
  border-radius: 12px;
  border: 1px solid #f3f4f6;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: var(--input-color);
  }
`;

const Icon = styled.img`
  position: absolute;
  padding: 13px 20px;
`;

const StyledButton = styled(Button)`
  width: 133px;
`;

const AllProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 24px;
`;

const PageNationIconContainer = styled.div`
  display: flex;
  gap: 4px;
`;

function Items() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");

  const handleRecent = () => {
    setOrderBy("recent");
  };

  const hanldeFavorite = () => {
    setOrderBy("favorite");
  };

  const hanldeLoad = async (options) => {
    const { list } = await getItems(options);
    if (options.page === 1) {
      setProducts(list);
    } else {
      setProducts([...products, ...list]);
    }
    setPage(options.page + 1);
  };

  const handleLoadMore = async () => {
    setPage((prev) => prev + 1);
    await hanldeLoad({ page, pageSize: PAGESIZE, orderBy });
  };

  // orderBy 변경 시 페이지 초기화
  useEffect(() => {
    const initialPage = 1;
    setPage(initialPage);
    hanldeLoad({ page: initialPage, pageSize: PAGESIZE, orderBy });
  }, [orderBy]);

  return (
    <StyledItems>
      <BestProductsContainer>
        <Title>베스트 상품</Title>
        <BestProducts>
          <ProductContainer
            src={firstImg}
            alt="아이패드 이미지"
            description="아이패드 미니 팝니다"
            price="500,000"
            favoriteCount="1000"
            width="282px"
          />
          <ProductContainer
            src={secondImg}
            alt="책 이미지"
            description="책 팝니다"
            price="50,000"
            favoriteCount="800"
            width="282px"
          />
          <ProductContainer
            src={thirdImg}
            alt="세탁기 이미지"
            description="세탁기 팝니다"
            price="500,000"
            favoriteCount="700"
            width="282px"
          />
          <ProductContainer
            src={fourthImg}
            alt="오븐 이미지"
            description="오븐 팝니다"
            price="300,000"
            favoriteCount="500"
            width="282px"
          />
        </BestProducts>
      </BestProductsContainer>

      <AllProductsContainer>
        <AllProductsHeader>
          <Title>전체 상품</Title>
          <InputContainer>
            <InputForm>
              <Input placeholder="검색할 상품을 입력해주세요" />
              <Icon src={readingGlasses} />
              <Link to="/additem">
                <StyledButton>상품 등록하기</StyledButton>
              </Link>
              <Accordian
                handleRecent={handleRecent}
                hanldeFavorite={hanldeFavorite}
              />
            </InputForm>
          </InputContainer>
        </AllProductsHeader>

        <AllProducts>
          {products.map((product) => {
            return (
              <ProductContainer
                key={product.id}
                src={product.images}
                alt={product.name}
                description={product.name}
                price={product.price}
                favoriteCount={product.favoriteCount}
              />
            );
          })}
        </AllProducts>
      </AllProductsContainer>
      <PageNationIconContainer>
        <img src={leftButton} alt="왼쪽 버튼" />
        <img src={pageNum} alt="페이지 번호" />
        <img src={rightButton} alt="오른쪽 버튼" onClick={handleLoadMore} />
      </PageNationIconContainer>
    </StyledItems>
  );
}

export default Items;
