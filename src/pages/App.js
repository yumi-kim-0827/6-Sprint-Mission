import GlobalStyle from "../styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BoardPage from "./BoardPage";
import AddItemPage from "./AddItemPage";
import FleaMarketPage from "./FleaMarket/FleaMarketPage";
import LoginPage from "./LoginPage";
import Layout from "../Layout";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
              <Route path="board" element={<BoardPage />} />
              <Route path="fleamarket" element={<FleaMarketPage />} />
              <Route path="additem" element={<AddItemPage />} />
              <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
