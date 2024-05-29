import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  margin: 70px auto 0 auto;
  padding: 16px;
  max-width: 1200px;
  width: 100%;
  height: auto;
  min-height: 80vh;

  @media (max-width: 738px) {
    padding: 24px;
  }
`;

export default Container;
