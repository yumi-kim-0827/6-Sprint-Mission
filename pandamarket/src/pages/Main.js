import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <h1>메인페이지 입니다</h1>
      <Link to="/items">
        <button>상품 페이지 바로가기</button>
      </Link>
    </>
  );
}

export default Main;
