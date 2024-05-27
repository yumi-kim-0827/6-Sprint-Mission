import MainLayout from "components/Layout";
import { AuthLogo, EasyLogin, LinkBlock, LoginForm } from "templates/Users";

export default function Login() {
  return (
    <MainLayout>
      <AuthLogo />
      <LoginForm />
      <EasyLogin />
      <LinkBlock type="login" />
    </MainLayout>
  );
}
