import { Outlet } from "react-router-dom";
import AuthHeader from "../components/Common/AuthHeader";

function AuthPage() {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  );
}

export default AuthPage;
