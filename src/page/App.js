import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Product from "./Product";
import AddItem from "./AddItem";
import Header from "../component/Header";
import Login from "../component/member/Login";
import NotFound from "./NotFound";
import Join from "../component/member/Join";

function App() {
  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Product />}></Route>
            <Route path="/addItem" element={<AddItem />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </>
  );
}

export default App;
