// BestProduct.jsx
import styled from "styled-components";
import ProductCard from "./ProductCard";

const BestProduct = ({ bestProducts }) => {
  return (
    <BestProductContainer>
      {bestProducts.map((product) => (
        <ProductCard key={product.id} product={product} showLikes />
      ))}
    </BestProductContainer>
  );
};

const BestProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  /* 태블릿 */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 모바일 */
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export default BestProduct;
