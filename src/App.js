import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemPage from "./pages/ItemPage/ItemPage";
import HomePage from "./pages/HomePage/HomePage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import Header from "./components/Layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="items" element={<ItemPage />} />
        <Route path="additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
