import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <main>
      <div>
        <Link to={"/"}>= = = 메인화면으로 = = =</Link>
      </div>
      로그인 페이지
      <div>
        <Link to={"/SignUp"}>= = = 회원가입 하러가기 = = =</Link>
      </div>
    </main>
  );
};

export default SignIn;
