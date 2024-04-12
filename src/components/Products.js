import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BestProduct from "./BestProduct";
import TotalProducts from "./TotalProducts";
import SearchProducts from "./SearchProducts";
import { getProducts } from "../Api/getProducts";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        if (data && data.list) {
          const originalProducts = data.list;
          const sortedBestProducts = originalProducts
            .slice()
            .sort((a, b) => b.favoriteCount - a.favoriteCount)
            .slice(0, 4);
          setProducts(originalProducts);
          setBestProducts(sortedBestProducts);
        } else {
          console.error("데이터를 받아오지 못했습니다.");
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
      ? filteredProducts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      : filteredProducts.sort((a, b) => b.favoriteCount - a.favoriteCount);

  return (
    <ProductContainer>
      <BestProductContainer>
        <BestTitle>베스트 상품</BestTitle>
        <BestProduct bestProducts={bestProducts} />
      </BestProductContainer>
      <TotalProductContainer>
        <TotalTitleContainer>
          <TotalTitle>전체상품</TotalTitle>
          <SearchProducts
            searchProduct={searchProduct}
            handleSearch={handleSearch}
            handleSortOrder={handleSortOrder}
            sortOrder={sortOrder}
            navigate={navigate}
          />
        </TotalTitleContainer>
        <TotalProducts sortedProducts={sortedProducts} />
      </TotalProductContainer>
    </ProductContainer>
  );
};

const BestTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  padding-bottom: 20px;
  color: #111827;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 100%;
  height: 100%;
  flex-direction: column;

  //모바일
  @media (max-width: 767px) {
  }
  //테블릿

  @media (max-width: 1200px) {
    padding: 10px 30px;
  }
`;

const BestProductContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 16px;
  opacity: 0px;
  padding: 40px 360px;

  //모바일
  @media (max-width: 767px) {
    padding: 10px 20px;
  }
  //테블릿

  @media (max-width: 1200px) {
    padding: 10px 30px;
  }
`;
const TotalProductContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 24px;
  opacity: 0px;
  padding: 40px 360px;

  //모바일
  @media (max-width: 767px) {
  }
  //테블릿

  @media (max-width: 1200px) {
    padding: 10px 30px;
  }
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

export default Product;
