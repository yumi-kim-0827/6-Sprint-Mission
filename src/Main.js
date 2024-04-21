import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import UsedMarketPage from "./pages/UsedMarketPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/items" element={<UsedMarketPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
