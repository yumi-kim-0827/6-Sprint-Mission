import Header from "../../components/Header";
import Button from "../../components/Button";
import "./index.css";

function AddProductPage() {
  return (
    <>
      <Header />
      <div className="form-container">
        <div className="product-form-title-wrapper">
          <h1 className="product-form-title">상품 등록하기</h1>
          <Button>등록</Button>
        </div>
        <form className="product-form">
          <div className="product-form-item">
            <label className="product-form-item-name" htmlFor="image">
              상품 이미지
              <div className="product-form-item-input image">
                <img
                  className="icon"
                  src="/images/ic_plus.svg"
                  alt="이미지 추가 아이콘"
                />
                <p>이미지 등록</p>
              </div>
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/png, image/jpg, image/jpeg"
            />
          </div>
          <div className="product-form-item">
            <label className="product-form-item-name" htmlFor="name">
              상품명
            </label>
            <input
              className="product-form-item-input"
              id="name"
              name="name"
              placeholder="상품명을 입력해주세요"
            />
          </div>
          <div className="product-form-item">
            <label className="product-form-item-name" htmlFor="introduction">
              상품 소개
            </label>
            <textarea
              className="product-form-item-input textarea"
              id="introduction"
              name="introduction"
              placeholder="상품 소개를 입력해주세요"
            />
          </div>
          <div className="product-form-item">
            <label className="product-form-item-name" htmlFor="price">
              판매가격
            </label>
            <input
              className="product-form-item-input"
              id="price"
              name="price"
              placeholder="판매가격을 입력해주세요"
            />
          </div>
          <div className="product-form-item">
            <label className="product-form-item-name" htmlFor="tag">
              태그
            </label>
            <input
              className="product-form-item-input"
              id="tag"
              name="tag"
              placeholder="태그를 입력해주세요"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProductPage;
