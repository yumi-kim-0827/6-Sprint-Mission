import AddItemFileInput from "../components/AddItemFileInput";
import "../styles/AddItemPage.css";

const INITIAL_VALUES = {
  images: [],
  name: "",
  description: "",
  price: 0,
  tags: [],
};

export default function AddItemPage() {
  return (
    <main>
      <form>
        <h1 className="add-page-heading">상품 등록하기</h1>
        <AddItemFileInput />
      </form>
    </main>
  );
}
