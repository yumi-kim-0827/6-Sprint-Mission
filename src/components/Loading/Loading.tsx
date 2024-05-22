import styled from "styled-components";

export default function Loading({ height }: { height?: number }) {
  return (
    <LoadingContainer height={height}>
      <StyledLoading />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div<{ height?: number }>`
  min-height: ${({ height = 500 }) => height}px;
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
