import GNB from "components/Navbar";
import MainLayout from "components/Layout";
import Pagination from "components/Pagination";
import { AllProducts, BestProducts } from "templates/FleaMarket";
import FleaMarketProvider from "contexts/react-context/FleaMarket";

export default function FleaMarket() {
  return (
    <>
      <GNB />
      <MainLayout>
        <FleaMarketProvider>
          <BestProducts />
          <AllProducts />
          <Pagination />
        </FleaMarketProvider>
      </MainLayout>
    </>
  );
}
