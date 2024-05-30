import Header from "../components/Header";
import LoginLink from "../components/LoginLink";
import ProductDetail from "../components/ui/ProductDetail";

function ProductDetailPage() {
  return (
    <>
      <Header>
        <LoginLink />
      </Header>
      <ProductDetail />
    </>
  );
}

export default ProductDetailPage;
