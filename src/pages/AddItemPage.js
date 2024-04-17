import AddItemFileInput from "../components/AddItemFileInput";
import "../styles/AddItemPage.css";

export default function AddItemPage() {
  return (
    <main>
      <form className="add-form">
        <h1 className="add-page-heading">상품 등록하기</h1>
        <AddItemFileInput />
        <div>
          <label htmlFor="name" className="form-label">
            상품명
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="상품명을 입력해주세요"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="description" className="form-label">
            상품 소개
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="상품 소개를 입력해주세요"
            className="form-textarea"
          />
        </div>
        <div>
          <label htmlFor="price" className="form-label">
            판매가격
          </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="판매가격을 입력해주세요"
            className="form-input"
          />
        </div>
        <button className="add-button">등록</button>
      </form>
    </main>
  );
}
