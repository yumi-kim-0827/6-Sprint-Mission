import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Img from "../assets/images/image.png";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://panda-market-api.vercel.app/products",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = response.data;
        if (data && data.list) {
          const originalProducts = data.list;
          const sortedBestProducts = originalProducts
            .slice()
            .sort((a, b) => b.favoriteCount - a.favoriteCount)
            .slice(0, 4);
          setProducts(originalProducts.slice(0, 12));
          setBestProducts(sortedBestProducts);
        } else {
          console.error("");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContainer>
      <BestTitle>베스트 상품</BestTitle>
      <BestProductContainer>
        {bestProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.images[0]} alt={product.name} />
            <ProductName>{product.name} 팝니다</ProductName>
            <ProductPrice>{product.price}원</ProductPrice>
            <ProductLikes>
              {product.favoriteCount == true ? "❤️" : "🤍"}
              {product.favoriteCount}
            </ProductLikes>
          </ProductCard>
        ))}
      </BestProductContainer>
      <TotalTitle>전체상품</TotalTitle>
      <TotalProductContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.images[0]} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}원</ProductPrice>
          </ProductCard>
        ))}
      </TotalProductContainer>
    </ProductContainer>
  );
};

const BestProductContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const TotalProductContainer = styled.div`
  display: flex;
  gap: 1rem;

  }
`;

const BestTitle = styled.h3`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.02em;
  text-align: left;
`;

const ProductContainer = styled.div`
  display: flex;
  width: 1201px;
  height: 1154px;
  margin-top: 94px;
  margin-left: 60px;
  gap: 40px;
  opacity: 0px;
  flex-direction: column;
`;

const ProductCard = styled.div`
  border: none;
  padding: 1rem;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductName = styled.h3`
  margin: 0.5rem 0;
  width: 116px;
  height: 17px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.71px;
  text-align: left;
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
`;

const TotalTitle = styled.h3`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.02em;
  text-align: left;
`;

export default Product;
