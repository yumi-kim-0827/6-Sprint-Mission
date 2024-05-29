import Image from "next/image";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <SLoading>
      <SpinnerContainer>
        <Spinner
          width={45}
          height={45}
          src="/images/ic_spinner.svg"
          alt="Loading..."
        />
      </SpinnerContainer>
      <LoadingText>Loading...</LoadingText>
    </SLoading>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

const Spinner = styled(Image)`
  width: 100%;
  height: 100%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.div`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 500;
  color: var(--color-gray-600);
`;

export default Loading;
