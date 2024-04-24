import MainLayout from "components/Layout/MainLayout";
import GNB from "components/Navbar/GNB";
import ProductDetail from "templates/market/ProductDetail";

export default function ItemPage() {
  return (
    <>
      <GNB />
      <MainLayout>
        <ProductDetail />
      </MainLayout>
    </>
  );
}
