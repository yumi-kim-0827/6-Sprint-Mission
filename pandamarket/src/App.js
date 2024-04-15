import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import Items from "./pages/Items";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/items" element={<Items />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
