import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PulseLoader } from 'react-spinners';

// 렌더링 중인 컴포넌트들을 가리기 위해 불투명한 흰색 바탕 위에 반투명한 검정 바탕의 overlay를 씌웠어요
const MaskedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9998;
`;

const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

interface LoadingSpinnerProps {
  isLoading: boolean;
  size?: number;
  color?: string;
  minLoadTime?: number;
}

const LoadingSpinner = ({ size = 20, color = 'var(--blue)', minLoadTime = 500 }: LoadingSpinnerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  // 로딩이 너무 빨라서 로딩 스피너가 순간적으로 나타났다 사라지는 것을 방지하기 위해 설정된 최소시간 동안은 스피너가 떠있도록 했어요.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, minLoadTime);

    return () => clearTimeout(timer);
  }, [minLoadTime]);

  return isVisible ? (
    <MaskedBackground>
      <SpinnerOverlay>
        <PulseLoader size={size} color={color} />
      </SpinnerOverlay>
    </MaskedBackground>
  ) : null;
};

export default LoadingSpinner;
