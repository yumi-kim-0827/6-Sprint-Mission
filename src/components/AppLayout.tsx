import { Outlet } from "react-router-dom";
import AppLayoutNavbar from "./AppLayoutNavbar";
import AppLayoutFooter from "./AppLayoutFooter";

const AppLayout = () => {
  return (
    <>
      <AppLayoutNavbar />
      <div>
        <Outlet />
      </div>
      <AppLayoutFooter />
    </>
  );
};

export default AppLayout;
