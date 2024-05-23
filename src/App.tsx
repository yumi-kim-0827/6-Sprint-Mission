import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemListPage from "./pages/ItemListPage";
import Home from "./pages/Home";
import AddItemPage from "./pages/AddItemPage";
import ItemDetailPage from "./pages/ItemDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemListPage />} />
        <Route path="/items/:itemId" element={<ItemDetailPage />} />
        <Route path="/addItem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
