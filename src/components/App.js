import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Items from "../pages/Items";
import NotFound from "../pages/NotFound";
import Community from "../pages/Community";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/Community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
