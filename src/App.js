import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import ItemDetail from "./pages/ItemDetail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="withHeader">
        <Routes>
          <Route path="items" element={<MarketPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="/items/:productId" element={<ItemDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
