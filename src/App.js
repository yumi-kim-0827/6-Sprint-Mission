import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemPage from "./pages/ItemPage/ItemPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="items" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
