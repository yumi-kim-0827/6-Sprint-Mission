import Product from "../components/Product";
import NavBar from "../components/header";

export default function ProductPage() {
  return (
    <>
      <NavBar />
      <div className="ProductPage">
        <Product />
      </div>
    </>
  );
}
