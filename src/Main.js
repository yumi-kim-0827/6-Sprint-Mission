import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import MarketPage from "./components/MarketPage";
import AddItem from "./components/AddItem";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<MarketPage />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
