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
`;

export default BestProduct;
