import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import NotFoundPage from "./pages/NotFoundPage";
import Boilerplate from "./components/Boilerplate";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Boilerplate />}>
        <Route index element={<HomePage />} />
        <Route path="items" element={<ItemPage />} />
      </Route>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
