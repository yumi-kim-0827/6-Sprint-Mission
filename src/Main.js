import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import AddProduct from "./pages/AddProduct/AddProduct";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import FreeBoard from "./pages/FreeBoard/FreeBoard";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<FreeBoard />} />
        <Route path="/items">
          <Route index element={<App />} />
          <Route path="additem" element={<AddProduct />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
