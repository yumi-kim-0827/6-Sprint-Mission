import {Header, Footer} from './components'
import Main from "./pages/Main";
import Items from "./pages/Items";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddItem from './pages/AddItem';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/items" element={<Items />} />
          <Route path="/additem" element={<AddItem />} />          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
