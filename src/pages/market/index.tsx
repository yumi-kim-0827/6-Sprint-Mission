import GNB from "components/Navbar";
import MainLayout from "components/Layout";
import Pagination from "components/Pagination";
import { AllProducts, BestProducts } from "templates/MarketMain";
import MarketMainProvider from "contexts/MarketMain";

export default function MarketMainPage() {
  return (
    <>
      <GNB />
      <MainLayout>
        <MarketMainProvider>
          <BestProducts />
          <AllProducts />
          <Pagination />
        </MarketMainProvider>
      </MainLayout>
    </>
  );
}
