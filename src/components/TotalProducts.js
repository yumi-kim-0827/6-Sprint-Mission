import styled from "styled-components";
import ProductCard from "./ProductCard";

const TotalProducts = ({ sortedProducts }) => {
  return (
    <TotalProductContainer>
      {sortedProducts.map((product) => (
        <ProductCard key={product.id} product={product} showLikes />
      ))}
    </TotalProductContainer>
  );
};

const TotalProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  /* 태블릿 */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* 모바일 */
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default TotalProducts;
