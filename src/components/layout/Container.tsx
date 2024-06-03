import styled from 'styled-components';

type ContainerPrps = {
  children: React.ReactNode;
};

export default function StyledContainer({ children, ...props }: ContainerPrps) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
