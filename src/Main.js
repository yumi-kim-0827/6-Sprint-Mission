import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import ItemPage from "./pages/ItemPage";
import HomePage from "./pages/HomePage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="items" element={<ItemPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
