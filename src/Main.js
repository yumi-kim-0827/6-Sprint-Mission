import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Items from "./pages/Items";
import Board from "./pages/Board";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="items" element={<Items />} />
          <Route path="board" element={<Board />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
