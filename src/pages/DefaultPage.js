import { Outlet } from "react-router-dom";
import Nav from "../components/Common/Nav";

function DefaultPage() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default DefaultPage;
