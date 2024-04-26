import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Community from "./components/pages/Community/Community";
import ItemPage from "./components/pages/ItemPage/ItemPage";
import AddItemPage from "./components/pages/AddItemPage/AddItemPage";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="community" element={<Community />} />
        <Route exact path="items" element={<ItemPage />} />
        <Route exact path="login" element={<Login/>} />
        <Route exact path="addItem" element={<AddItemPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
