import BestItemSection from "./component/BestItemSection";
import AllItemSection from "./component/AllItemSection";
import "./MarketPage.css";


function MarketPage() {
  return (
    <div className="section">
      <BestItemSection />
      <AllItemSection />
    </div>
  );
}

export default MarketPage;
