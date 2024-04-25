import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import AddProduct from "./pages/AddProduct";

const Main = () => {
  return (
    <BrowserRouter>
      {/* <App> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Add" element={<AddProduct />} />
      </Routes>
      {/* </App> */}
    </BrowserRouter>
  );
};

export default Main;
