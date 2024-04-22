import { Link } from "react-router-dom";

function EnterItem() {
  return (
    <div className="enterButton-box">
      <Link to="additem">
        <button className="button enterButton">상품 등록하기</button>
      </Link>
    </div>
  );
}

export default EnterItem;
