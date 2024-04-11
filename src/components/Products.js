import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Img from "../assets/images/image.png";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const navigate = useNavigate();

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
          setProducts(originalProducts);
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

  const handleSearch = (e) => {
    setSearchProduct(e.target.value);
  };

  const handleSortOrder = (order) => {
    setSortOrder(order);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const sortedProducts =
    sortOrder === "newest"
      ? filteredProducts
      : filteredProducts.sort((a, b) => b.favoriteCount - a.favoriteCount);

  return (
    <ProductContainer>
      <BestTitle>베스트 상품</BestTitle>
      <BestProductContainer>
        {bestProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={Img} alt={product.name} />
            <ProductName>{product.name} 팝니다</ProductName>
            <ProductPrice>{product.price}원</ProductPrice>
            <ProductLikes>
              {product.favoriteCount !== 0 ? "❤️" : "🤍"}{" "}
              {product.favoriteCount}
            </ProductLikes>
          </ProductCard>
        ))}
      </BestProductContainer>
      <TotalTitleContainer>
        <TotalTitle>전체상품</TotalTitle>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="🔍 상품을 검색해주세요"
            value={searchProduct}
            onChange={handleSearch}
          />
          <ButtonProduct onClick={() => navigate("/items")}>
            상품 등록하기
          </ButtonProduct>
          <DropdownBox
            value={sortOrder}
            onChange={(e) => handleSortOrder(e.target.value)}
          >
            <option value="newest">최신순</option>
            <option value="likes">좋아요순</option>
          </DropdownBox>
        </SearchContainer>
      </TotalTitleContainer>
      <TotalProductContainer>
        {sortedProducts.slice(0, 10).map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={Img} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}원</ProductPrice>
          </ProductCard>
        ))}
      </TotalProductContainer>
    </ProductContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #3692ff;
  border-radius: 4px;
  margin-right: 1rem;
`;

const DropdownBox = styled.select`
  width: 130px;
  height: 42px;
  gap: 10px;
  border-radius: 12px;
`;

const BestProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const TotalProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const BestTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  padding-bottom: 20px;
  color: #111827;
`;

const ProductContainer = styled.div`
  display: flex;
  width: 1201px;
  padding-top: 20px;
  padding-left: 260px;
  flex-direction: column;
`;

const ProductCard = styled.div`
  border: none;
  padding: 0.5rem;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
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
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.09px;
  text-align: left;
`;

const ProductLikes = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.32px;
  text-align: left;
  color: #4b5563;
  padding-top: 10px;
`;

const TotalTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #111827;
`;

const TotalTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ButtonProduct = styled.a`
  padding: 10px 17px 10px 17px;
  background-color: #3692ff;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 500;
  line-height: 19.09px;
`;

export default Product;
