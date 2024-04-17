import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Item from "./pages/Item";
import "./App.css";
import FreeBoard from "./pages/FreeBoard";
import Navigation from "./components/Navigation";

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes path="/">
      <Route index element={<Main />} />
      <Route element={<Layout />}>
        <Route path="items" element={<Item />} />
        <Route path="freeboard" element={<FreeBoard />} />
      </Route>
    </Routes>
  );
}

export default App;
