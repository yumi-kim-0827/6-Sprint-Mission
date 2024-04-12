import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import { MOBILE, TABLET, PC } from "./utils/magicLiterals";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ItemsPage from "./pages/ItemsPage";
import PrivacyPage from "./pages/PrivacyPage";
import FaqPage from "./pages/FaqPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  // <Q1>
  // 초기 디바이스 모드 잘 정하는 방법이 있을까요?
  // 이번 커밋 이전에는 처음에 무조건 PC버전으로 로드됐는데,
  // 아래에서 setDevice로 변경해주어도 자동으로 다시 렌더링 되어
  // 알맞은 버전으로 보여주지 않은 이유가 무엇일까요?
  const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
  const tabletMediaQuery = window.matchMedia("(max-width: 1199px)");
  const getDevice = () => {
    if (mobileMediaQuery.matches) {
      return MOBILE;
    } else if (tabletMediaQuery.matches) {
      return TABLET;
    } else {
      return PC;
    }
  };

  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDevice());
    };

    // 미디어 쿼리 변경 사항을 감지하고 상태 업데이트
    mobileMediaQuery.addListener(handleResize);
    tabletMediaQuery.addListener(handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      mobileMediaQuery.removeListener(handleResize);
      tabletMediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="items" element={<ItemsPage device={device} />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
