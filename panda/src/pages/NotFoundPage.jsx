import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="mt-52 flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-bold">404 Error</h1>
      <h2>페이지를 찾을 수 없습니다.</h2>
      <p>
        죄송합니다. 요청하신 페이지가 존재하지 않거나 사용할 수 없는
        페이지입니다.
      </p>

      <Link to="/">
        <button className="bg-primaryColor p-5 text-white rounded-lg">
          메인 페이지로 돌아가기
        </button>
      </Link>
    </div>
  );
}
