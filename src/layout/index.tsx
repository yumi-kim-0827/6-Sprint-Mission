import { Outlet } from "react-router-dom";
import Header from "../components/header/header.tsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
