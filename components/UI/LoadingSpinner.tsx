import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import style from "./LoadingSpinner.module.scss";

interface LoadingSpinnerProps {
  isLoading: boolean;
  size?: number; // 컴포넌트 내에서 디폴트 값을 부여한 경우엔 `?`를 사용해 optional props로 설정해 주세요
  color?: string;
  minLoadTime?: number;
}

export default function LoadingSpinner({
  isLoading,
  size = 20,
  color = "var(--blue)",
  minLoadTime = 500,
}: LoadingSpinnerProps) {
  const [isVisible, setIsVisible] = useState(isLoading);

  // 로딩이 너무 빨라서 로딩 스피너가 순간적으로 나타났다 사라지는 것을 방지하기 위해 설정된 최소시간 동안은 스피너가 떠있도록 했어요.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, minLoadTime);

    return () => clearTimeout(timer);
  }, [minLoadTime]);

  return isVisible ? (
    <div className={style.masked_background}>
      <div className={style.spinner_overlay}>
        <PulseLoader size={size} color={color} />
      </div>
    </div>
  ) : null;
}
