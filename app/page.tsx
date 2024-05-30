import LoginPage from "./login/page";

export const metadata = { title: "Home" };

export default async function HomePage() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}
