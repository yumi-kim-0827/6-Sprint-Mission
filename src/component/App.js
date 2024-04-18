import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product/Product";
import AddItem from "./Product/AddItem";
import Header from "./Header";
import Login from "./member/Login";
import NotFound from "./NotFound";
import Join from "./member/Join";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
