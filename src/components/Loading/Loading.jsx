import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingContainer>
      <StyledLoading />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  min-height: 500px;
`;

const StyledLoading = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 5px solid var(--blue);
  border-radius: 50%;
  z-index: 999;
`;
