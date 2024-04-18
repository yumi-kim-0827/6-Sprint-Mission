import Navbar from "../components/Navbar";
import ProductForm from "../components/ProductForm";

// 상품 등록 페이지입니다.
export default function AddItem() {
  return (
    <>
      <Navbar />
      <main>
        <ProductForm />
      </main>
    </>
  );
}
