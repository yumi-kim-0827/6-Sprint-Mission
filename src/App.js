import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/items" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
