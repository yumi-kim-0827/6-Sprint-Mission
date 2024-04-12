import styled from "styled-components";
import ProductCard from "./ProductCard";

const TotalProducts = ({ sortedProducts }) => {
  return (
    <TotalProductContainer>
      {sortedProducts.slice(0, 10).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </TotalProductContainer>
  );
};

const TotalProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export default TotalProducts;
