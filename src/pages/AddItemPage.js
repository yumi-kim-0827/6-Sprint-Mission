import AddItemFileInput from "../components/AddItemFileInput";
import "../styles/AddItemPage.css";

export default function AddItemPage() {
  return (
    <main>
      <form className="add-form">
        <h1 className="add-page-heading">상품 등록하기</h1>
        <AddItemFileInput />
        <button className="add-button">등록</button>
      </form>
    </main>
  );
}
