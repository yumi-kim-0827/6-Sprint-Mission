import { Link } from "react-router-dom";

function UsedMarket() {
  return (
    <>
      <h1>베스트 상품</h1>
      <h1>전체 상품</h1>
      <button>
        <Link to="/additem">상품 등록하기</Link>
      </button>
    </>
  );
}

export default UsedMarket;
