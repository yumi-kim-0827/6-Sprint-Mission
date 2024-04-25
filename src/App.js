import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="withHeader">
        <Routes>
          <Route path="items" element={<MarketPage />} />
          <Route path="additem" element={<AddItemPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
