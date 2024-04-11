import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Items from "../pages/Items";
import NotFound from "../pages/NotFound";
import Community from "../pages/Community";
import AddItem from "../pages/AddItem";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
