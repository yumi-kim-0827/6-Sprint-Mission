import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import { MOBILE, TABLET, PC } from "./utils/constants";

import DefaultPage from "./pages/DefaultPage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ItemsPage from "./pages/ItemsPage";
import AddItemPage from "./pages/AddItemPage";
import PrivacyPage from "./pages/PrivacyPage";
import FaqPage from "./pages/FaqPage";
import NotFoundPage from "./pages/NotFoundPage";

const mediaQuery = {
  mobile: window.matchMedia("(max-width: 767px)"),
  tablet: window.matchMedia("(max-width: 1199px)"),
};

const getDevice = () => {
  if (mediaQuery.mobile.matches) {
    return MOBILE;
  } else if (mediaQuery.tablet.matches) {
    return TABLET;
  } else {
    return PC;
  }
};

function App() {
  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDevice());
    };

    // 미디어 쿼리 변경 사항을 감지하고 상태 업데이트
    mediaQuery.mobile.addListener(handleResize);
    mediaQuery.tablet.addListener(handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      mediaQuery.mobile.removeListener(handleResize);
      mediaQuery.tablet.removeListener(handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<HomePage />} />
          <Route path="items" element={<ItemsPage device={device} />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="faq" element={<FaqPage />} />
        </Route>
        <Route path="/" element={<AuthPage />}>
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
