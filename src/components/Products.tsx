import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { fetchProducts } from "../api";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

interface Product {
  id: string;
  name: string;
  price: number;
  favoriteCount: number;
  createdAt: number;
  images: string[];
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [bestProducts, setBestProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [pageSize] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await fetchProducts();

        const sortByFunction =
          sortBy === "latest"
            ? (a: Product, b: Product) => b.createdAt - a.createdAt
            : (a: Product, b: Product) => b.favoriteCount - a.favoriteCount;

        const filteredProducts = productList
          .filter((product: { name: string }) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .sort(sortByFunction);

        let sortedProducts = [...productList].sort(sortByFunction);

        setTotal(filteredProducts.length);
        setProducts(sortedProducts.slice(0, 12));

        const bestSortedProducts = [...productList].sort(
          (a, b) => b.favoriteCount - a.favoriteCount
        );
        setBestProducts(bestSortedProducts.slice(0, 4));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [sortBy, search, page]);

  const handleSortChange = (event: { target: { value: any } }) => {
    setSortBy(event.target.value);
  };

  const handleSearchChange = (e: { target: { value: any } }) => {
    setSearch(e.target.value);
  };

  const handlePagination = (_: any, value: any) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setPage(value);
  };

  return (
    <ProductContainer>
      <BestTitle>베스트 상품</BestTitle>
      <BestProductContainer>
        {bestProducts.map((product) => (
          <StyledLink to={`/items/${product.id}`} key={product.id}>
            <ProductCard>
              <BestProductImage src={product.images[0]} alt={product.name} />
              <ProductName>{product.name} 팝니다</ProductName>
              <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
              <ProductLikes> 🤍{product.favoriteCount}</ProductLikes>
            </ProductCard>
          </StyledLink>
        ))}
      </BestProductContainer>
      <TotalTitle>상품</TotalTitle>
      <ButtonContainer>
        <SearchInput
          placeholder="   🔎 검색할 상품을 입력해주세요"
          value={search}
          onChange={handleSearchChange}
        />
        <AddItemButton to="/additem">상품 등록하기</AddItemButton>
        <SortDropdown value={sortBy} onChange={handleSortChange}>
          <option value="latest">최신순</option>
          <option value="likes">좋아요순</option>
        </SortDropdown>
      </ButtonContainer>
      <TotalProductContainer>
        {products.map((product) => (
          <StyledLink to={`/items/${product.id}`} key={product.id}>
            <ProductCard>
              <TotalProductImage src={product.images[0]} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
              <ProductLikes> 🤍 {product.favoriteCount}</ProductLikes>
            </ProductCard>
          </StyledLink>
        ))}
      </TotalProductContainer>
      <Pagination
        count={Math.ceil(total / pageSize)}
        page={page}
        onChange={handlePagination}
        color="primary"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      />
    </ProductContainer>
  );
};

const BestProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 1023px) {
    > :nth-child(n + 3) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    > :nth-child(n + 2) {
      display: none;
    }
  }
`;

const TotalProductContainer = styled.div`
  display: flex;
  margin: auto;
  flex-wrap: wrap; 
  }
`;

const BestTitle = styled.h3`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #111827;
  margin-top: -55px;
`;

const ProductContainer = styled.div`
  display: flex;
  height: 1154px;
  margin-top: 94px;
  gap: 40px;
  opacity: 0px;
  flex-direction: column;
  max-width: 1160px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const ProductCard = styled.div`
  border: none;
  padding: 0.3rem;
  text-align: center;
`;

const BestProductImage = styled.img`
  width: 282px;
  height: 282px;
  border-radius: 16px;
  @media (max-width: 1023px) {
    width: 336px;
    height: 336px;
  }
  @media (max-width: 767px) {
    width: 343px;
    height: 343px;
  }
`;

const TotalProductImage = styled.img`
  width: 221px;
  height: 221px;
  border-radius: 16px;
`;

const ProductName = styled.h3`
  margin: 8px 0;
  width: 116px;
  height: 17px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.71px;
  text-align: left;
  white-space: nowrap;
`;

const ProductPrice = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.09px;
  text-align: left;
`;

const ProductLikes = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.32px;
  text-align: left;
  color: #4b5563;
  padding-top: 10px;
  margin-top: 7px;
`;

const TotalTitle = styled.h3`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #111827;
  @media (max-width: 1023px) {
    &:before {
      content: "판매 중인 ";
    }
  }
  @media (max-width: 767px) {
    &:before {
      content: "판매 중인 ";
    }
  }
  @media (min-width: 1024px) {
    &:before {
      content: "전체 ";
    }
  }
`;

const AddItemButton = styled(Link)`
  width: 130px;
  height: 19px;
  padding: 12px 20px;
  gap: 10px;
  border-radius: 12px;
  background-color: #3692ff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
`;

const SortDropdown = styled.select`
  width: 130px;
  height: 42px;
  padding: 8px 20px 8px 20px;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(229, 231, 235, 1);
  margin-left: auto;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 42px;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 12px;
`;

const SearchInput = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid rgba(229, 231, 235, 1);
  background-color: #f9f9f9;
  font-weight: 400;
  font-size: 16px;
`;

export default Product;
