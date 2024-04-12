import styled from "styled-components";
import { fetchProducts } from "../api";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await fetchProducts();

        let sortedProducts = [...productList];

        if (sortBy === "latest") {
          sortedProducts = sortedProducts.sort(
            (a, b) => b.createdAt - a.createdAt
          );
        } else if (sortBy === "likes") {
          sortedProducts = sortedProducts.sort(
            (a, b) => b.favoriteCount - a.favoriteCount
          );
        }

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
  }, [sortBy]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <ProductContainer>
      <BestTitle>베스트 상품</BestTitle>
      <BestProductContainer>
        {bestProducts.map((product) => (
          <ProductCard key={product.id}>
            <BestProductImage src={product.images[0]} alt={product.name} />
            <ProductName>{product.name} 팝니다</ProductName>
            <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
            <ProductLikes> 🤍{product.favoriteCount}</ProductLikes>
          </ProductCard>
        ))}
      </BestProductContainer>
      <TotalTitle>상품</TotalTitle>
      <ButtonContainer>
        <AddItemButton to="/additem">상품 등록하기</AddItemButton>
        <SortDropdown value={sortBy} onChange={handleSortChange}>
          <option value="latest">최신순</option>
          <option value="likes">좋아요순</option>
        </SortDropdown>
      </ButtonContainer>
      <TotalProductContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <TotalProductImage src={product.images[0]} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
            <ProductLikes> 🤍 {product.favoriteCount}</ProductLikes>
          </ProductCard>
        ))}
      </TotalProductContainer>
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
  margin-left: auto;
  margin-right: auto;
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
  margin: 0.5rem 0;
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

const AddItemButton = styled(Link)`
  width: 130px;
  height: 19px;
  padding: 12px 20px 12px 20px;
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

const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 12px;
`;

export default Product;
