import { Link } from "react-router-dom";

import React from "react";
const SignUp = () => {
  return (
    <>
      <main>
        <div>
          <Link to={"/"}>= = = 메인화면으로 = = =</Link>
        </div>
        회원가입 페이지
        <div>
          <Link to={"/SignIn"}>= = = 로그인 하러가기 = = =</Link>
        </div>
      </main>
    </>
  );
};

export default SignUp;
