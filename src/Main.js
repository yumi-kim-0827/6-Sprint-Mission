import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import AddProduct from "./pages/AddProduct/AddProduct";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Add" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
