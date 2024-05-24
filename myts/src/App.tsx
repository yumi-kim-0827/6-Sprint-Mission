import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MarketPage from "./pages/MarketPage";
import AddItemPage from "./pages/AddItemPage";
import ItemPage from "./pages/ItemPage";

function App() {
    return (
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<MarketPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="items">
            <Route index element={<MarketPage />} />
            <Route path=":productId" element={<ItemPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;