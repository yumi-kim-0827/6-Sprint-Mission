import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Item from "./pages/Item";
import "./App.css";
import FreeBoard from "./pages/FreeBoard";
import Navigation from "./components/Navigation";
import SignIn from "./pages/SignIn";
import AddItem from "./pages/AddItem";

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
      <Route path="signIn" element={<SignIn />} />
      <Route path="additem" element={<AddItem />} />
    </Routes>
  );
}

export default App;
