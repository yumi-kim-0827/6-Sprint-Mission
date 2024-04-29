import BestProducts from "./components/BestProducts";
import OnSaleProducts from "./components/OnSaleProducts";
import { PaginationBar } from "./components/PaginationBar";

export default function Items() {
  return (
    <>
      <BestProducts />
      <OnSaleProducts />
      <PaginationBar />
    </>
  );
}
