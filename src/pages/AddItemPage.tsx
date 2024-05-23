import { useNavigate, Link } from "react-router-dom";

import Logo from "../assets/logo.png";

import FileInput from "../components/FileInut";

import "../styles/AddItemPage.css";

export default function AddItemPage() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <nav>
          <img src={Logo} alt="판다마켓 로고" />
          <span>자유게시판</span>
          <Link to="/items">
            <span>중고마켓</span>
          </Link>
        </nav>

        <button
          className="login_button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </button>
      </header>
      <form action="" className="add_form_wrapper">
        <div className="add_form_wrapper_header">
          <h1>상품 등록하기</h1>
          <button>등록</button>
        </div>

        <label htmlFor="">상품 이미지</label>
        <FileInput/>

        <label htmlFor="">상품명</label>
        <input type="text" placeholder="상품명을 입력해주세요" />

        <label htmlFor="">상품소개</label>
        <textarea placeholder="상품 소개를 입력해주세요" />

        <label htmlFor="">판매가격</label>
        <input type="text" placeholder="판매 가격을 입력해주세요" />

        <label htmlFor="">태그</label>
        <input type="text" placeholder="태그를 입력해주세요" />

        <div className="tag_wrapper">
          <ul>

          </ul>
        </div>
      </form>
    </div>
  );
}
