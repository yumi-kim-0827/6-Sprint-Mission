import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Items from "./pages/items";
import AddItems from "./pages/add-items";
import Main from "./pages/main";
import DetailItem from "./pages/detail-item";
import Layout from "./pages/Layout";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

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
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
