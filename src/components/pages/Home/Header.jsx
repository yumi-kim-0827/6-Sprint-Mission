import React from "react";
import Button from "../../Button"

const Header = () => {
  return (
    <>
      <div className="">
        <img className="" src={"판다마켓이미지"} />
        <span className="">자유게시판</span>
        <span className="">중고마켓</span>
      </div>
      <Button>로그인</Button>
    </>
  );
};

export default Header;
