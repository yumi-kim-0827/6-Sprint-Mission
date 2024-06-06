import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// 다른 페이지 및 컴포넌트 import 구문

const MainContent: React.FC = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }
  }, []);

  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {/* {!hideHeader && <Header />} */}

      <main className={isAuthPage ? "" : "withHeader"}>
        <Routes>{/* Route 구성 */}</Routes>
      </main>
    </>
  );
};
