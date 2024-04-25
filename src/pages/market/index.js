import GNB from "components/Navbar";
import MainLayout from "components/Layout";
import Pagination from "components/Pagination";
import { AllProducts, BestProducts } from "templates/MarketMain";

export default function MarketMainPage() {
  return (
    <>
      <GNB />
      <MainLayout>
        <BestProducts />
        <AllProducts />
        <Pagination />
      </MainLayout>
    </>
  );
}
