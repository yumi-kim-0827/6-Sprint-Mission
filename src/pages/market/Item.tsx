import MainLayout from "components/Layout/MainLayout";
import GNB from "components/Navbar/GNB";
import { ProductDetail } from "templates/Item";

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
