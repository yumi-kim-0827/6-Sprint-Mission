import Header from "../../components/Header";
import BestProducts from "../../components/BestProducts";
import AllProducts from "../../components/AllProducts";
import "./index.css";

function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <BestProducts />
          <AllProducts />
        </div>
      </main>
    </>
  );
}

export default ProductPage;
