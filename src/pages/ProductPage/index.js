import Header from "../../components/Header";
import BestProducts from "../../components/BestProducts";
import "./index.css";

function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <BestProducts />
        </div>
      </main>
    </>
  );
}

export default ProductPage;
