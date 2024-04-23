import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppLayout from "./components/AppLayout";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AddItemPage from "./pages/AddItemPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="items" element={<ItemPage />} />
        <Route path="additem" element={<AddItemPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      {/* <Route path="/login" element={<LogIn />} /> */}
      {/* <Route path="/signup" element={<SignUp />} /> */}
    </Routes>
  );
}

export default AppRoutes;
