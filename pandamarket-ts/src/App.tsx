import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/signinPage/LoginPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage";
import Header from "./components/Layout/Header";
import ItemPage from "./pages/ItemPage/ItemPage";
import React from "react";
import SignupPage from "./pages/LoginPage/signupPage/SignupPage";
import { AuthProvider } from "./context/AuthContext";

const AppContent = () => {
  const location = useLocation();
  const hideHeaderPaths = ["/login", "/signUp"];
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <div className="withHeader">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="items" element={<MarketPage />} />
          {/* 
            동적 라우팅 (Dynamic Routing)
            - `:` 뒤에 상품 아이디를 `path parameter`로 추가해주어 각 상품의 상세 페이지를 생성할 수 있어요.
            - 해당 페이지의 컴포넌트 내에서 useParams 훅을 이용하면 path parameter의 값을 사용할 수 있어요
          */}
          <Route path="items/:productId" element={<ItemPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="community" element={<CommunityFeedPage />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
