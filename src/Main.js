import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import MarketPage from "./pages/MarketPage/MarketPage";


function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={ } />
          <Route path="items" element={<MarketPage/>} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
