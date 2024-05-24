import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BestProduct from "./BestProduct";
import TotalProducts from "./TotalProducts";
import SearchProducts from "./SearchProducts";
import { getProducts, list } from "../Api/getProducts";

const Product = () => {
  const [products, setProducts] = useState<list[]>([]);
  const [bestProducts, setBestProducts] = useState<list[]>([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "favorite">("newest");
  const [bestProductsCount, setBestProductsCount] = useState<number>(4);
  const [totalProductsCount, setTotalProductsCount] = useState<number>(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        if (data && data.list) {
          const originalProducts = data.list;
          setProducts(originalProducts);
        } else {
          console.error("데이터를 받아오지 못했습니다.");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const sortedBestProducts = useMemo<list[]>(
    () =>
      products
        .slice()
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
        .slice(0, bestProductsCount),
    [products, bestProductsCount]
  );

  useEffect(() => {
    setBestProducts(sortedBestProducts);
  }, [sortedBestProducts]);

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 767) {
          setBestProductsCount(1);
          setTotalProductsCount(4);
        } else if (screenWidth <= 1200) {
          setBestProductsCount(2);
          setTotalProductsCount(6);
        } else {
          setBestProductsCount(4);
          setTotalProductsCount(10);
        }
      }, 300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(debounceTimer);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(e.target.value);
  };

  const handleSortOrder = (order: "newest" | "favorite") => {
    setSortOrder(order);
  };

  const filteredProducts = useMemo<list[]>(
    () =>
      products.filter((product) =>
        product.name.toLowerCase().includes(searchProduct.toLowerCase())
      ),
    [products, searchProduct]
  );

  const sortedProducts = useMemo<list[]>(() => {
    if (sortOrder === "newest") {
      return [...filteredProducts].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else {
      return [...filteredProducts].sort(
        (a, b) => b.favoriteCount - a.favoriteCount
      );
    }
  }, [sortOrder, filteredProducts]);

  return (
    <ProductContainer>
      <BestProductContainer>
        <BestTitle>베스트 상품</BestTitle>
        <BestProduct bestProducts={bestProducts} />
      </BestProductContainer>
      <TotalProductContainer>
        <TotalTitleContainer>
          <TotalTitle>판매중인 상품</TotalTitle>
          <SearchProducts
            searchProduct={searchProduct}
            handleSearch={handleSearch}
            handleSortOrder={handleSortOrder}
            sortOrder={sortOrder}
          />
        </TotalTitleContainer>
        <TotalProducts
          sortedProducts={sortedProducts.slice(0, totalProductsCount)}
        />
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
  padding: 50px 140px;

  //모바일
  @media (max-width: 767px) {
    padding: 3px 5px;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  opacity: 0px;

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
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;

export default Product;
