import { Link } from "react-router-dom";
import BestItemSection from "./components/BestItemSection";
import AllItemSection from "./components/AllItemSection";

function MarketPage() {
  return (
    <>
      <div>
        <BestItemSection />
        <AllItemSection />
        <button className="w-[88px] h-[42px] p-[12px 23px] gap-[10px] rounded-md bg-[#3692ff] text-[16px] font-[600] text-[#fff] hover:bg-[var(--blue70)]">
          <Link to="/additem">상품 등록하기</Link>
        </button>
      </div>
    </>
  );
}

export default MarketPage;
