import BestItemBanner from "./BestItemBanner";
import MainItemList from "./MainItemList";
import "./../styles/MarketPage.css";

function MarketPage() {
  return (
    <main className="main">
      <BestItemBanner />
      <MainItemList />
    </main>
  );
}

export default MarketPage;
