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
  // 처음 접속할 때 괜히 PC 버전으로 데이터가 한 번 로드되는데
  // 처음엔 -1이나 undefined 등으로 로드되지 않도록 막는 게 좋을까요?
  const [device, setDevice] = useState(PC);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
    const tabletMediaQuery = window.matchMedia("(max-width: 1199px)");

    const handleResize = () => {
      if (mobileMediaQuery.matches) {
        setDevice(MOBILE);
      } else if (tabletMediaQuery.matches) {
        setDevice(TABLET);
      } else {
        setDevice(PC);
      }
    };

    handleResize();

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
