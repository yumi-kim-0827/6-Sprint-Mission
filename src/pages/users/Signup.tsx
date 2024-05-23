import MainLayout from "components/Layout";
import {
  AuthLogo,
  EasyLogin,
  LinkBlock,
  LoginForm,
  SignupForm,
} from "templates/Users";

export default function Signup() {
  return (
    <MainLayout>
      <AuthLogo />
      <SignupForm />
      <EasyLogin />
      <LinkBlock type="signup" />
    </MainLayout>
  );
}
