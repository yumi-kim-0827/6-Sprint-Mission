import { ReactNode } from "react";
import styled from "styled-components";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <StyledMainLayout>{children}</StyledMainLayout>;
}

const StyledMainLayout = styled.div`
  margin: 0 20px 100px;

  @media (min-width: 768px) {
    margin: 0 24px 100px;
  }

  @media (min-width: 1000px) {
    margin: 0 100px 100px;
  }

  @media (min-width: 1200px) {
    margin: 0 200px 100px;
  }

  @media (min-width: 1600px) {
    margin: 0 360px 100px;
  }
`;
