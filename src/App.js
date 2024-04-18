import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./components/global.css";
import MarketPage from "./pages/MarketPage/MarketPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="withHeader">
        <Routes>
          <Route path="items" element={<MarketPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
