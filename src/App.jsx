import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Items from "./pages/Items";
import AddItems from "./pages/AddItems";
import Main from "./pages/Main";
import DetailItem from "./pages/DetailItem";
import Layout from "./pages/Layout";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
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
