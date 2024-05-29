import { useRef } from "react";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <StyledDiv>
      <StyledP>
        <S404>
          <Shadow />4<AnimationP>🐼</AnimationP>4
        </S404>
        NotFoundPage
      </StyledP>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  position: relative;
  margin: 70px auto 0 auto;
  max-width: 1200px;
  height: calc(100vh - 230px);
`;

const StyledP = styled.p`
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 50px;
  text-align: center;
`;

const S404 = styled.p`
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
  font-size: 160px;
`;

const AnimationP = styled.div`
  display: inline-block;
  margin: 0 28px;
  animation: floating-emoji 5s cubic-bezier(0.82, 0, 0.14, 0.98) infinite;

  @keyframes floating-emoji {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-60px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 82px;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  transform: translateX(-50%);
  z-index: -1;
`;

export default NotFoundPage;
