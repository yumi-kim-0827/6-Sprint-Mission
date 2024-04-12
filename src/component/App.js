import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import AddItem from "./AddItem";
import Header from "./Header";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/addItem" element={<AddItem />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
