import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Items from "./pages/Items";
import Board from "./pages/Board";
import AddItem from "./pages/AddItem";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="items">
            <Route index element={<Items />} />
            <Route path="additem" element={<AddItem />} />
          </Route>
          <Route path="board" element={<Board />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
