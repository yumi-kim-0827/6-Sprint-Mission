import styled from "styled-components";

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h1 {
    font-size: 24px;
    font-weight: 600;
  }

  h2 {
    font-size: 40px;
    font-weight: 600;
  }
`;

export default function ItemDetail({ item }) {
  return (
    <DescriptionContainer>
      <h1>{item.name}</h1>
      {/* <h2>{item.price.toLocaleString()}원</h2> 
        TypeError: Cannot read properties of undefined (reading 'toLocaleString') */}
      <h2>{item.price ? `${item.price.toLocaleString()}원` : ""}</h2>
    </DescriptionContainer>
  );
}
