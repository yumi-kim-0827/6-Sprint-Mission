import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Items from "./pages/Items";
import AddItems from "./pages/AddItems";
import MainPage from "./pages/MainPage";
import Main from "./pages/Main";
import DetailItem from "./pages/DetailItem";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<MainPage />} />
          <Route path="items">
            <Route index element={<Items />} />
            <Route path=":Id" element={<DetailItem />} />
          </Route>
          <Route path="additems" element={<AddItems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
