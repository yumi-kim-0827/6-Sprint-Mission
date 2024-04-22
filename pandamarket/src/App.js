import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Item from "./pages/Item";
import "./App.css";
import FreeBoard from "./pages/FreeBoard";
import Navigation from "./components/Navigation";
import SignIn from "./pages/SignIn";
import AddItem from "./pages/AddItem";
import { useState } from "react";

function Layout({ isLogin }) {
  return (
    <>
      <Navigation isLogin={isLogin} />
      <Outlet />
    </>
  );
}

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const onChangeLogin = () => {
    console.log(isLogin);
    setIsLogin(true);
  };
  return (
    <Routes path="/">
      <Route index element={<Main />} />
      <Route element={<Layout isLogin={isLogin} />}>
        <Route path="items" element={<Item onChangeLogin={onChangeLogin} />} />
        <Route path="freeboard" element={<FreeBoard />} />
        <Route path="additem" element={<AddItem />} />
      </Route>
      <Route path="signIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
