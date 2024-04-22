import GNB from "components/Navbar";
import MainLayout from "components/Layout";
import Pagination from "components/Pagination";
import AllProducts from "templates/market/AllProducts";
import BestProducts from "templates/market/BestProducts";

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
