import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemPage from "./pages/ItemPage/ItemPage";
import HomePage from "./pages/HomePage/HomePage";
import Nav from "./components/ui/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="items" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
