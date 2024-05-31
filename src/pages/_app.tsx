import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Layout/Header";

export default function App() {
  return (
    <Router>
      <Header></Header>
      {/* 다른 컴포넌트들 */}
    </Router>
  );
}

// // useLocation 훅을 사용하기 위해 router 컴포넌트를 분리했어요.
// const MainContent: React.FC = () => {
//   const location = useLocation();
//   const isAuthPage =
//     location.pathname === "/login" || location.pathname === "/signup";
//   // 네비게이션바를 숨김 처리하고자 하는 pathname 목록
//   const hideHeader = isAuthPage;

//   return (
//     <>
//       {!hideHeader && <Header />}

//       <main className={isAuthPage ? "" : "withHeader"}>
//         <Routes>
//           <Route index element={<HomePage />} />
//           <Route path="login" element={<LoginPage />} />
//           <Route path="signup" element={<SignupPage />} />
//           <Route path="items" element={<MarketPage />} />
//           <Route path="items/:productId" element={<ItemPage />} />
//           <Route path="additem" element={<AddItemPage />} />
//           <Route path="community" element={<CommunityFeedPage />} />
//           <Route path="privacy" element={<PolicyPage />} />
//           <Route path="faq" element={<FaqPage />} />
//         </Routes>
//       </main>
//     </>
//   );
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <MainContent />
//     </BrowserRouter>
//   );
// }

// export default App;
