import AllMarket from "../components/AllMarket";
import BestMarket from "../components/BestMarket";
import NavBar from "../components/header";
import "../style/market.css";

export default function MarketPage() {
  return (
    <>
      <NavBar />
      <div className="market">
        <BestMarket />
        <AllMarket />
      </div>
    </>
  );
}
