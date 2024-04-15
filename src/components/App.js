import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Items from "../pages/Items";
import AddItem from "../pages/AddItem";
import Community from "../pages/Community";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
